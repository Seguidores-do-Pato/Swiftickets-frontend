import React from 'react';
import {
    Box,
    Flex,
    Image,
    Input,
    Button,
    Stack,
    InputGroup,
    InputRightElement,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons'

import Logo from '../../assets/Logo.png';
import '../../assets/Logo.d.ts'

import { useNavigate } from 'react-router-dom';


const Header: React.FC = () => {
    const navigate = useNavigate();
    
    return (
        <Box px={40} py={4} color="white">
            <Flex alignItems="center" justifyContent="space-between">
                <Image src={Logo} cursor={'pointer'} alt="Logo" w="15%" h="auto" onClick={() => navigate("/")}/>

                <InputGroup width={'25%'}>
                    <Input placeholder='Pesquisar' color={'black'}/>
                    <InputRightElement cursor={"pointer"}>
                        <SearchIcon color='teal.500'/>
                    </InputRightElement>
                </InputGroup>
                
                <Stack direction='row' spacing={4}>
                    <Button colorScheme='teal' variant='outline' onClick={() => navigate("/login")}>
                        Entrar
                    </Button>
                    <Button colorScheme='teal' variant='solid'>
                        Registrar
                    </Button>
                </Stack>
            </Flex>
        </Box>
    );
};

export default Header;