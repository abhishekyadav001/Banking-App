import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { transactionAmount } from "../Redux/Trasaction/action";

import { checkBalance } from "../Redux/Auth/action";
import TransactionAmounts from "../Components/TransactionAmounts";

function Transaction(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const withdrawModal = useDisclosure();
  const toast = useToast();

  const [amount, setAmount] = useState({});
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const dispatch = useDispatch();
  const { accountBalance, isLoading, errorMessage } = useSelector((store) => store.auth);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setAmount({ amount: Number(value), type: `${name}` });
  };

  const handleEvent = () => {
    dispatch(transactionAmount(amount))
      .then((res) => {
        toast({
          title: "Transaction Successfull",
          description: "You can check for confirmation your transaction history",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setAmount({});
      })
      .catch((error) => {
        toast({
          title: errorMessage,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };
  useEffect(() => {
    getcurrentBalance();
  }, [amount, isOpen, onClose]);
  const getcurrentBalance = async () => {
    try {
      dispatch(checkBalance());
    } catch (error) {
      return error;
    }
  };
  return (
    <VStack display={"flex"} justifyContent={"center"}>
      <Box width={"70%"}>
        <VStack align={"flex-start"}>
          <Heading>Transaction Page</Heading>
          <Text fontSize="2xl">Amount:{accountBalance || 0} </Text>
        </VStack>
        <HStack>
          <Button colorScheme="blue" size="md" onClick={onOpen}>
            Deposit
          </Button>
          <Button colorScheme="red" size="md" onClick={withdrawModal.onOpen}>
            Withdraw
          </Button>
        </HStack>
      </Box>
      <Box>
        <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Deposit your Money</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Amount</FormLabel>
                <Input
                  type="number"
                  ref={initialRef}
                  name="Deposit"
                  onChange={handleInput}
                  placeholder="Enter amount here"
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" onClick={handleEvent} mr={3}>
                Deposit
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Modal initialFocusRef={finalRef} isOpen={withdrawModal.isOpen} onClose={withdrawModal.onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Withdraw Your Money</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Amount</FormLabel>
                <Input
                  type="number"
                  ref={finalRef}
                  name="Withdraw"
                  onChange={handleInput}
                  placeholder="Enter amount here"
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="red"
                onClick={handleEvent}
                isLoading={isLoading}
                loadingText={"Withdrawing...."}
                mr={3}
              >
                Withdraw
              </Button>
              <Button onClick={withdrawModal.onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
      <Box>
        <TransactionAmounts />
      </Box>
    </VStack>
  );
}

export default Transaction;
