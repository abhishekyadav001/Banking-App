const express = require("express");
const transactionModel = require("../model/transaction.model");
const authMiddleware = require("../middleware/auth.middleware");
const userModel = require("../model/users.model");

const transactionRouter = express.Router();
transactionRouter.use(authMiddleware);
transactionRouter.get("/", async (req, res) => {
  try {
    const alltransactions = await transactionModel.find();

    res.status(201).send({ msg: "all user is get successfully", " payload": { alltransactions } });
  } catch (error) {}
});

transactionRouter.post("/", async (req, res) => {
  try {
    const { userID, amount, type } = req.body;

    const transaction = await transactionModel.create({ userID, amount, type });
    const currentAmount = await userModel.findById(userID);

    const currentBalance = currentAmount.balance;

    if (type == "Deposit") {
      const newAmount = currentBalance + amount;

      const users = await userModel.findByIdAndUpdate(userID, { $set: { balance: newAmount } });
    } else {
      const newAmount = currentBalance - amount;
      const users = await userModel.findByIdAndUpdate(
        userID,
        { balance: newAmount },
        { new: true, runValidators: true }
      );
      console.log(users);
    }
    res.status(201).send({ msg: "Transaction Successfull" });
  } catch (error) {
    res.status(401).send(error.message);
  }
});
module.exports = transactionRouter;
