import React, { useState } from "react";
import { useAuth } from "../../contexts/Auth";
import {
    Alert,
    AlertIcon,
    Button,
    Center,
    Container,
    Divider,
    Flex,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Text
} from "@chakra-ui/react";
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const Login = () => {
    const { Login } = useAuth();
    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)
    const handleClick = () => setShow(!show)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin() {
        if (!email.trim() || !password.trim()) {
            setError(true)
            return;
        }
        Login(email, password);
    }
    return (
        <>
            <Container>
                <Center mt={20} mb={10}>
                    <Flex flexDirection={"column"} alignItems={"center"}>
                        <Text fontSize='4xl'>Bem vindo de volta!</Text>
                        <Divider />
                    </Flex>
                </Center>
                <Center>
                    <Flex flexDirection={"column"} alignItems={"center"} gap={5}>
                        <InputGroup>
                            <Input
                                variant='outline'
                                placeholder='Email'
                                isRequired
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <InputLeftElement>
                                <EmailIcon />
                            </InputLeftElement>
                        </InputGroup>
                        <InputGroup>
                            <Input
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                placeholder='Senha'
                                variant='outline'
                                isRequired
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <InputLeftElement>
                                <LockIcon />
                            </InputLeftElement>
                            <InputRightElement width='3rem'>
                                <Button size='sm' onClick={handleClick} variant="unstyled">
                                    {show ? <ViewIcon /> : <ViewOffIcon />}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        <Button w='100%' colorScheme='teal' onClick={handleLogin}>Entrar</Button>
                        {error &&
                            <Alert status='error'>
                                <AlertIcon />
                                Por favor, preencha todos os campos
                            </Alert>
                        }
                    </Flex>
                </Center>
            </Container>
        </>
    )
}

export default Login;