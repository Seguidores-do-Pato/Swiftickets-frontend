import axios from "axios";
import { BASE_URL, SWIFTICKETS_URL } from "../constants/urls";
import { useAuth } from "../contexts/Auth";

const useApi = () => {
    const { UpdateToken } = useAuth();

    const api = axios.create({
        baseURL: `${BASE_URL}${SWIFTICKETS_URL}`,
        timeout: 1000,
        headers: {
            "Content-Type": "application/json",
        }
    })

    api.interceptors.request.use(async (req) => {
        const auth = await UpdateToken();
        req.headers.Authorization = `Bearer ${auth}`;
        return req;
    }, (err) => {
        console.error("interceptor error:", err)
    });
    return api;
}

export default useApi;