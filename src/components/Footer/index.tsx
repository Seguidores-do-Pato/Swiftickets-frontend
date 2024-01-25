import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bgColor="teal" color="white" p={4} position="fixed" bottom="0" width="100%">
      <Flex justify="center" align="center">
        <Text>&copy; 2024 Swiftickets. Todos os direitos reservados.</Text>
      </Flex>
    </Box>
  );
};

export default Footer;