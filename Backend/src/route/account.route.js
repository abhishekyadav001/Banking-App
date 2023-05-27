const express = require("express");
const { accountModel } = require("../model/account.model");
const accountRouter = express.Router();
accountRouter.get("/", (req, res) => {
  res.send("this is a accountRouting page");
});

accountRouter.post("/transfer", async (req, res) => {
  try {
    const { id, amount, status } = req.body;
    const transaction = await accountModel.create({ id, amount, status });

    res.status(201).send("success");
  } catch (error) {
    res.status(401).send(error.message);
  }
});

accountRouter.get("/app", async (req, res) => {
  res.send("heelo");
});
module.exports = { accountRouter };
