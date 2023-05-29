import { Avatar, Box, Button, HStack, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

function Profile(props) {
  return (
    <Box alignContent={"center"}>
      <Stack justifyContent={"center"} w={"fit-content"}>
        <Heading>Profile</Heading>
        <HStack>
          <Avatar
            size={"50px"}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX_xtnZ-ylE50HqNDHSkokxByuAK01e04YjB2LtLE-1k6TbEYdPIRR2bOn"
          />
          <VStack border={"1px solid red"}>
            <Text fontSize="3xl" as={"b"}>
              Account:{"1254683466"}
            </Text>
            <Text fontSize="xl">Username:{"abish"}</Text>
            <Text fontSize="xl">Email:{"ab@gmail.com"}</Text>
            <Text fontSize="xl">Balance:{"50Rs."}</Text>
            <Button colorScheme="blue">Pay</Button>
          </VStack>
        </HStack>
      </Stack>
    </Box>
  );
}

export default Profile;
