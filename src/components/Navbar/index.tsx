import React from "react";
import {
    Button,
    Flex
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    return (
        <Flex justifyContent={"left"} px={40} bg="teal" color="white" h={10} alignItems="center" gap={10}>
            <Link to="/">
                <Button colorScheme='white' variant='link'>
                    Home
                </Button>
            </Link>
            <Button colorScheme='white' variant='link'>
                Explorar
            </Button>
        </Flex>
    )
}

export default Navbar;