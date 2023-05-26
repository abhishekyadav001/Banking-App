import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Heading, Spacer, Button } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box bg="gray.800" px={4} py={3} position={"sticky"} top={"1px"} border={"black 1px solid"}>
      <Flex alignItems="center" maxWidth="800px" mx={"auto"}>
        <Link to="/transaction">
          <Heading color="white" size="md">
            My Website
          </Heading>
        </Link>
        <Spacer />
        <Link to="/login">
          <Button colorScheme="blue" mr={2}>
            Login
          </Button>
        </Link>
        <Link to="/signup">
          <Button colorScheme="blue" w={"-webkit-fit-content"} variant="outline">
            Signup
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
