const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    shorturl: {
      type: String,
      required:true,
      unique: true,
    },
    actualurl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Url", urlSchema);