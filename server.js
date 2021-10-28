const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

require("dotenv").config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
app.use(express.static("client/build"));
}
