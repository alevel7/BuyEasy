const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(cors());



app.listen(3000, () => {
    console.log("Server started on port 3000");
});