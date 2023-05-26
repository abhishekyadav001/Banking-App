import React from "react";
import { Link as RichLink } from "react-router-dom";
import { Box, Flex, Image, Link, Heading, Spacer, Button, useColorModeValue, HStack } from "@chakra-ui/react";
import logo from "../Assets/logo.png";
const Links = [
  { name: "Home", path: "/" },
  { name: "Transactions", path: "/transaction" },
  { name: "Account", path: "/account" },
];
const NavLink = ({ path, name }) => (
  <Link
    p={2}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    as={RichLink}
    to={path}
  >
    {name}
  </Link>
);

const Navbar = () => {
  return (
    <Box px={4} py={3} position={"sticky"} top={"1px"} border={"black 1px solid"}>
      <Flex alignItems="center" maxWidth="800px" mx={"auto"}>
        <Link as={RichLink} to="/">
          <Image width={"30px"} src={logo} />
        </Link>
        <Spacer />
        <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
          {Links.map((link) => (
            <NavLink key={link.path} {...link} />
          ))}
        </HStack>
        <Spacer />
        <RichLink to="/login">
          <Button colorScheme="blue" mr={2}>
            Login
          </Button>
        </RichLink>
        <RichLink to="/signup">
          <Button colorScheme="blue" w={"-webkit-fit-content"} variant="outline">
            Signup
          </Button>
        </RichLink>
      </Flex>
    </Box>
  );
};

export default Navbar;
