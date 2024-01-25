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
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
} from '@chakra-ui/react';
import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons'

import Logo from '../../assets/Logo.png';
import '../../assets/Logo.d.ts'
import {
    FaUser,
    FaSignOutAlt,
    FaRegUserCircle
} from "react-icons/fa";

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/Auth';


const Header: React.FC = () => {
    const navigate = useNavigate();
    const { user, Logout } = useAuth();

    return (
        <Box mx={20} my={5} color="white">
            <Flex alignItems="center" justifyContent="space-between" mr={100}>
                <Image src={Logo} cursor={'pointer'} alt="Logo" w="16%" onClick={() => navigate("/")} />

                <InputGroup width={'20%'}>
                    <Input placeholder='Pesquisar' color={'black'} />
                    <InputRightElement cursor={"pointer"}>
                        <SearchIcon color='teal.500' />
                    </InputRightElement>
                </InputGroup>
                {user ? (
                    <Menu>
                        <MenuButton
                            as={Button}
                            aria-label='Options'
                            rightIcon={<ChevronDownIcon />}
                            bg={'transparent'}
                        >
                            <FaUser size={20} />
                        </MenuButton>
                        <MenuList color={'black'}>
                            <MenuItem icon={<FaRegUserCircle size={16} />}>
                                Perfil
                            </MenuItem>
                            <MenuDivider />
                            <MenuItem icon={<FaSignOutAlt size={16} />} onClick={() =>Logout()}>
                                Logout
                            </MenuItem>
                        </MenuList>
                    </Menu>
                ) : (
                    <Stack direction='row' spacing={4}>
                        <Button colorScheme='teal' variant='outline' onClick={() => navigate("/login")}>
                            Entrar
                        </Button>
                        <Button colorScheme='teal' variant='solid' onClick={()=>navigate("/register")}>
                            Registrar
                        </Button>
                    </Stack>
                )}
            </Flex>
        </Box>
    );
};

export default Header;