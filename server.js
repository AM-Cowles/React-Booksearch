const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

require("dotenv").config();

const PORT = process.env.PORT || 3001;
const app = express();