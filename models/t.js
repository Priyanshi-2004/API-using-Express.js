const express = require("express")
const mongoose = require("mongoose")

const TSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: [true, "Price must be provided"],
  },
  duration: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: [true, "Location must be provided"],
  },
  description: {
    type: String,
    required: true,
  },
});

const TRanking = new mongoose.model("TRanking", TSchema)
module.exports = TRanking;