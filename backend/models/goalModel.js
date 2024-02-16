const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please add a text value"],
    },
  },
  {
    // Timestamp will create a updatedAt and createAt fields automatically
    timestamps: true,
  }
);

module.exports = mongoose.model('Goal', goalSchema)
