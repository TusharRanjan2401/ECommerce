const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    slug: {
      type: String,
      require: true,
    },

    description: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },
    category: {
      type: mongoose.ObjectId,
      ref: "Category",
      require: true,
    },
    quantity: {
      type: Number,
      require: true,
    },

    photo: {
      data: Buffer,
      contentType: String,
    },

    shipping: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Products", productSchema);
