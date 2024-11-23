const dotEnv = require("dotenv");
// dotEnv.config();
if (process.env.NODE_ENV !== "prod") {
  console.log("using dev env")
  const configFile = `./.env.${process.env.NODE_ENV}`;
  dotEnv.config({ path: configFile });
} else {
  console.log("using prod env")
  dotEnv.config();
}

module.exports = {
  PORT: process.env.PORT,
  DB_URL: process.env.MONGODB_URI,
  APP_SECRET: process.env.APP_SECRET,
};
