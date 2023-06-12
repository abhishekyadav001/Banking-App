import React, { useEffect } from "react";
import PaymentCard from "./PaymentCard";
import { Heading, VStack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getTransactionHistory } from "../Redux/Trasaction/action";

function TransactionAmounts() {
  const { transactionHistory } = useSelector((store) => store.transaction);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTransactionHistory({ page: 1, limit: 6 }));
  }, []);
  console.log(transactionHistory);
  return (
    <VStack>
      <Heading>Transaction History</Heading>
      <VStack spacing={17} pb={"20px"}>
        {transactionHistory.map((e, i) => {
          return <PaymentCard key={i} {...e} />;
        })}
      </VStack>
    </VStack>
  );
}

export default TransactionAmounts;
