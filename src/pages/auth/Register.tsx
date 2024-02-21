import React, { useState } from "react";
import {
    Box,
    Button,
    Center,
    Divider,
    Text,
    Flex,
    FormControl,
    FormErrorMessage,
    Heading,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    AbsoluteCenter,
    ButtonGroup,
} from "@chakra-ui/react";
import Banner from '../../assets/loginImgBanner.jpg'
import '../../assets/loginImgBanner.d.ts'
import Logo from '../../assets/Logo.png'
import '../../assets/Logo.d.ts'
import { FaArrowLeft, FaEnvelope, FaLock, FaSignInAlt, FaExclamationCircle, FaFacebook, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useAuth } from "../../contexts/Auth";

const Register = () => {
    const { Register } = useAuth();
    //auth
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const navigate = useNavigate();
    const [show, setShow] = useState<boolean>(false);
    const handleClick = () => setShow(!show);

    //errors
    const [error, setError] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>('')

    function ValidationForm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!EmailRegex.test(email)) {
            setError(true);
            setErrorMessage('Email inválido! Por favor, insira um email válido');
            return;
        }
        if (!password.trim() || !confirmPassword.trim()) {
            setError(true);
            setErrorMessage('Por favor, preencha todos os campos')
            return;
        }

        if (password !== confirmPassword) {
            setError(true);
            setErrorMessage('As senhas não coincidem');
            return;
        }

        setError(false);
        setErrorMessage('');
        Register(email, password);
    }

    function handleClickOnDoNothingButton() {
        //this function has a big alert because it`s cool :)
        alert("This button is in ninja training for the ancient art of doing absolutely nothing. Stay tuned for its grand debut as the ultimate master of stillness! 😄")
    }

    return (
        <>
            <Flex align={"center"} h={"100vh"}>
                <Box
                    style={{
                        backgroundImage: `url(${Banner})`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        width: '50%',
                        height: '100vh',
                    }}
                    py={5}
                >
                    <img src={Logo} alt="logo" style={{ mixBlendMode: "color-burn", paddingLeft: 16 }} />
                </Box>
                <Box w={"25%"} mx={40} pl={10}>
                    <Center flex={1} flexDirection={"column"} alignItems={"start"}>
                        <Flex>
                            <Button colorScheme='teal' variant='ghost' size="lg" onClick={() => navigate("/")}>
                                <FaArrowLeft />
                            </Button>
                            <Heading pr={2}>CRIAR</Heading><Heading color={"teal"}>CONTA</Heading>
                        </Flex>
                        <Divider w={250} />
                    </Center>
                    <Box>
                        <Flex direction={"column"}>
                            <form onSubmit={ValidationForm}>
                                <FormControl>
                                    <InputGroup mb={3} mt={4}>
                                        <InputLeftElement>
                                            <FaEnvelope />
                                        </InputLeftElement>
                                        <Input type="email" placeholder="Email" id='email' onChange={(e) => setEmail(e.target.value)} />
                                    </InputGroup>
                                    <InputGroup mb={3}>
                                        <InputLeftElement>
                                            <FaLock />
                                        </InputLeftElement>
                                        <Input
                                            type={show ? 'text' : 'password'}
                                            pr='4.5rem'
                                            placeholder="Senha"
                                            id='password'
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <InputRightElement width='3rem'>
                                            <span onClick={handleClick} style={{ cursor: "pointer" }}>
                                                {show ? <ViewIcon /> : <ViewOffIcon />}
                                            </span>
                                        </InputRightElement>
                                    </InputGroup>
                                    <InputGroup mb={3}>
                                        <InputLeftElement>
                                            <FaLock />
                                        </InputLeftElement>
                                        <Input
                                            type={show ? 'text' : 'password'}
                                            pr='4.5rem'
                                            placeholder="Confirme sua senha"
                                            id='confirmPassword'
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                        />
                                        <InputRightElement width='3rem'>
                                            <span onClick={handleClick} style={{ cursor: "pointer" }}>
                                                {show ? <ViewIcon /> : <ViewOffIcon />}
                                            </span>
                                        </InputRightElement>
                                    </InputGroup>
                                    {error ? (
                                        <Box bgColor='red.100' borderRadius='5px' p='2%' mb='3%'>
                                            <Flex alignItems='center'>
                                                <Box pl={0.5}>
                                                    <FaExclamationCircle size={20} />
                                                </Box>
                                                <Text fontSize='lg' color='red' pl={3}>{errorMessage}</Text>
                                            </Flex>
                                        </Box>
                                    ) : null}
                                    <Button
                                        type="submit"
                                        leftIcon={<FaSignInAlt />}
                                        w={"100%"}
                                        colorScheme="teal"
                                    >
                                        Registrar
                                    </Button>
                                </FormControl>
                            </form>
                        </Flex>
                    </Box>
                    <Flex w={'100%'} justifyContent={"end"} mt={1} mb={2}>
                        <Text fontSize={"small"} as={"b"}>
                            Já possui uma conta?
                            <Button variant='link' size={'small'} color={"teal"} pl={1} onClick={()=>navigate("/login")}>Entrar</Button>
                        </Text>
                    </Flex>
                    <Box position='relative' p={5} mb={4}>
                        <Divider />
                        <AbsoluteCenter bg='white' px='2'>
                            <Text fontSize="sm" fontWeight="bold"> Ou </Text>
                        </AbsoluteCenter>
                    </Box>
                    <Box>
                        <Center>
                            <ButtonGroup pr={4}>
                                <Button variant='outline' colorScheme='facebook' leftIcon={<FaFacebook />} onClick={handleClickOnDoNothingButton}>
                                    Facebook
                                </Button>
                                <Button variant='outline' colorScheme='red' leftIcon={<FaGoogle />} onClick={handleClickOnDoNothingButton}>
                                    Google
                                </Button>
                            </ButtonGroup>
                        </Center>
                    </Box>
                </Box>
            </Flex>
        </>
    )
}

export default Register;