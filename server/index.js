const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const connectDb = require("./config/db");
const router = require("./routes");

dotenv.config({ path: path.resolve(__dirname, ".env") });

console.log("MONGO_URI is:", process.env.MONGO_URI);

const app = express();
connectDb();

app.use('',router);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`🚀 App running on port ${port}`));
