import React, { useState } from "react";
import {
    Box,
    Button,
    Center,
    Divider,
    Flex,
    FormControl,
    Text,
    Heading,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    AbsoluteCenter,
    ButtonGroup,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from "@chakra-ui/react";
import { FaEnvelope, FaFacebook, FaGoogle, FaLock, FaSignInAlt, FaArrowLeft } from "react-icons/fa";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useAuth } from "../../contexts/Auth";
import { useNavigate } from "react-router-dom";
import Logo from '../../assets/Logo.png'
import '../../assets/Logo.d.ts'
import Banner from '../../assets/loginImgBanner.jpg'
import '../../assets/loginImgBanner.d.ts'


const Login = () => {
    const { Login } = useAuth();
    //auth inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false)

    //password hide/show
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    //navigate
    const navigate = useNavigate();

    function handleLogin() {
        if (!email.trim() || !password.trim()) {
            setError(true);
            return;
        }
        Login(email, password);
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
                <Box w="25%" mx={40} pl={10}>
                    <Center flex={1} flexDirection={"column"} alignItems={"start"}>
                        <Flex>
                            <Button colorScheme='teal' variant='ghost' size="lg" onClick={() => navigate("/")}>
                                <FaArrowLeft />
                            </Button>
                            <Heading pr={2}>FAZER</Heading><Heading color={"teal"}>LOGIN</Heading>
                        </Flex>
                        <Divider w={250} />
                    </Center>
                    <Center mt={10}>
                        <FormControl isRequired>
                            <InputGroup mb={3}>
                                <InputLeftElement>
                                    <FaEnvelope />
                                </InputLeftElement>
                                <Input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                            </InputGroup>
                            <InputGroup>
                                <InputLeftElement>
                                    <FaLock />
                                </InputLeftElement>
                                <Input
                                    type={show ? 'text' : 'password'}
                                    pr='4.5rem'
                                    placeholder="Senha"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <InputRightElement width='3rem'>
                                    <span onClick={handleClick} style={{ cursor: "pointer" }}>
                                        {show ? <ViewIcon /> : <ViewOffIcon />}
                                    </span>
                                </InputRightElement>
                            </InputGroup>
                            <Box style={{ display: "flex", justifyContent: "end", marginBottom: "2%" }}>
                                <Button size="sm" variant='link' colorScheme="black" onClick={() => navigate("/")}>
                                    Esqueceu a senha?
                                </Button>
                            </Box>
                            <Button colorScheme="teal" width="100%" leftIcon={<FaSignInAlt />} pr={5} mb={2} onClick={handleLogin}>Entrar</Button>
                            <Box style={{ display: "flex", justifyContent: "end"}}>
                                <Text fontSize={"small"} as={'b'}>
                                    Não tem conta?
                                    <Button size="small" variant='link' colorScheme="teal" onClick={() => navigate("/register")} ml={1}>
                                        Registre-se
                                    </Button>
                                </Text>
                            </Box>
                            {!error ? null :
                                <Alert
                                    status='error'
                                    flexDirection='column'
                                    alignItems='center'
                                    justifyContent='center'
                                    textAlign='center'
                                >
                                    <AlertIcon />
                                    <AlertTitle>Email ou Senha inválido!</AlertTitle>
                                    <AlertDescription>Por favor, tente novamente.</AlertDescription>
                                </Alert>
                            }
                        </FormControl>
                    </Center>
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

export default Login;