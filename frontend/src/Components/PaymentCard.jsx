import { Card, CardBody, CardHeader, Text } from "@chakra-ui/react";
import React from "react";

function PaymentCard({ amount, type }) {
  const coLor = type === "Deposit" ? "blue" : "red";

  return (
    <Card width={"100%"}>
      <CardHeader>
        <Text color={coLor}>Payment Type: {type}</Text>
      </CardHeader>
      <CardBody>
        <Text color={coLor}> Amount: {amount} </Text>
      </CardBody>
    </Card>
  );
}

export default PaymentCard;
