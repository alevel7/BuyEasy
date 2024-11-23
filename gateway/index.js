const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");

const app = express();

app.use(express.json());
app.use(cors());



app.listen(3000, () => {
    console.log("Server started on port 3000");
});