import React, { useEffect, useState } from "react";
import PaymentCard from "./PaymentCard";
import { Button, ButtonGroup, Container, Grid, Heading, Stack, VStack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getTransactionHistory } from "../Redux/Trasaction/action";
import "./Css/transactionAmount.css";
function TransactionAmounts() {
  const { transactionHistory, totalpages } = useSelector((store) => store.transaction);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  function eventListeners() {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        handlePrevious();
      }
      if (event.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalpages));
  };

  useEffect(() => {
    eventListeners(handleNext, handlePrevious);
    dispatch(getTransactionHistory({ page: currentPage, limit: 8 }));
  }, [currentPage]);
  return (
    <VStack>
      <Heading>Transaction History</Heading>
      <Grid className="transaction-container" gridTemplateColumns={"repeat(4,1fr)"} gap={6} autoRows={"auto"}>
        {transactionHistory.map((e, i) => {
          return <PaymentCard key={i} {...e} />;
        })}
      </Grid>
      <VStack>
        <ButtonGroup>
          <Button onClick={handlePrevious} isDisabled={currentPage == 1}>
            Previous
          </Button>
          <Button isDisabled>{currentPage}</Button>
          <Button onClick={handleNext} isDisabled={currentPage >= totalpages}>
            Next
          </Button>
        </ButtonGroup>
      </VStack>
    </VStack>
  );
}

export default TransactionAmounts;
