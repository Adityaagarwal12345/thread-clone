const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const connectDb = require("./config/db");
const mongoose = require("mongoose");
const router = require("./routes");
mongoose.connection.once('open', () => {
  console.log("✅ Connected to DB:", mongoose.connection.name);
});


console.log("✅ Router file loaded");


dotenv.config({ path: path.resolve(__dirname, ".env") });

console.log("MONGO_URI is:", process.env.MONGO_URI);

const app = express();
connectDb();
app.use(express.json());//ab ye hota hai json body accept ni krta thunder client uske liye ye hai

app.use('/api',router);

const port = process.env.PORT || 7000;
app.listen(port, () => console.log(`🚀 App running on port ${port}`));
