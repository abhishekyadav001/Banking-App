const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    amount: { type: Number, required: true },
    status: { Enumerator: ["Deposit", "Withdraw"], required: true },
  },
  { timestamps: true }
);
const accountModel = mongoose.model("account", accountSchema);

module.exports = { accountModel };
