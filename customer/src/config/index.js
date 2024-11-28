const dotEnv = require("dotenv");
const fs = require('fs');

if (process.env.NODE_ENV === "dev") {
  dotEnv.config({ path: "./.env.dev" });
  const configFile = `.env.${process.env.NODE_ENV}`;
  console.log("USING DEV ENV", process.env.NODE_ENV)
} else {
  dotEnv.config();
  console.log("USING PRODUCTION ENV", process.env.NODE_ENV)
}

module.exports = {
  PORT: process.env.PORT,
  DB_URL: process.env.MONGODB_URI,
  APP_SECRET: process.env.APP_SECRET,
};
