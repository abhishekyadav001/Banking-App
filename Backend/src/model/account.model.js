const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    amount: { type: Number, required: true },
    status: { type: String, required: true },
  },
  { timestamps: true }
);
const accountModel = mongoose.model("account", accountSchema);

module.exports = { accountModel };
