import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { BASE_URL, LOGIN_URL, REFRESH_URL, REGISTER_URL } from '../constants/urls'

interface AuthContextData {
    user?: object | null;
    Login: (email: string, password: string) => Promise<void>
    Logout: () => Promise<void>
    Register: (email:string, password:string) => Promise<void>
    UpdateToken: () => Promise<void>
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState(() => {
        let storedTokens = localStorage.getItem('authTokens');
        return storedTokens ? jwtDecode(storedTokens) : null;
    }

    );
    const [tokens, setTokens] = useState(() => {
        let storedTokens = localStorage.getItem('authTokens');
        return storedTokens ? JSON.parse(storedTokens) : null;
    }
    );
    const navigate = useNavigate();

    async function Login(email: string, password: string) {
        const response = await axios.post(`${BASE_URL}${LOGIN_URL}`, {
            email,
            password,
        });
        console.log(response);
        setTokens(response.data);
        setUser(jwtDecode(response.data.access));
        localStorage.setItem('authTokens', JSON.stringify(response.data));
        navigate('/');
    }

    async function Register(email:string, password:string){
        const response = await axios.post(`${BASE_URL}${REGISTER_URL}`, {
            email,
            password,
        }).then(()=>{
            navigate("/login");
        }).catch((error)=>{
            console.error("error ao registrar:", error);
        })
    }

    function isValidToken(tokens: string){
        const payload = jwtDecode(tokens) as {exp: number};
        return Date.now() < payload.exp * 1000;
    }

    async function UpdateToken() {
        if(isValidToken(tokens.access)){
            return tokens;
        }

        const dataToSend = {
            refresh: tokens?.refresh,
        }

        const response = await axios.post(`${BASE_URL}${REFRESH_URL}`, dataToSend)
            .then(response => {
                setTokens(response.data);
                setUser(jwtDecode(response.data.access));
                localStorage.setItem('authTokens', JSON.stringify(response.data))
            })
            .catch(erro => {
                console.error('erro', erro)
                Logout();
            })
    }

    async function Logout(): Promise<void> {
        setTokens(null);
        setUser(null);
        localStorage.removeItem('authTokens');
        return;
    }
    return (
        <AuthContext.Provider value={{ user, Login, Logout, UpdateToken, Register }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(): AuthContextData{
    const context = useContext(AuthContext)
    return context; 
}