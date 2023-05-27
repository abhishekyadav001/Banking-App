const express = require("express");
const { accountModel } = require("../model/account.model");
const accountRouter = express.Router();
accountRouter.get("/", (req, res) => {
  res.send("this is a accountRouting page");
});

module.exports = { accountRouter };
