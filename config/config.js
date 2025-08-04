// require("dotenv").config();

// const config = Object.freeze({
//   port: process.env.PORT || 3000,

//   // Sequelize (MySQL) DB Config
//   db: {
//     name: process.env.DB_NAME,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD || process.env.DB_PASS, // fallback to DB_PASS if used
//     host: process.env.DB_HOST || "localhost",
//     port: process.env.DB_PORT || 3306,
//     dialect: process.env.DB_DIALECT || "mysql",
//   },
//   accessTokenSecret: process.env.ACCESS_TOKEN_SECRET||"123456789" ,
//   nodeEnv: process.env.NODE_ENV || "development",

// });

// module.exports = config;

// config.js

// Sec
// require("dotenv").config();

// const config = Object.freeze({
//   port: process.env.PORT || 3000,

//   db: {
//     name: process.env.DB_NAME,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD || process.env.DB_PASS, // fallback
//     host: process.env.DB_HOST, // required in cloud — NEVER use localhost
//     port: Number(process.env.DB_PORT) || 3306,
//     dialect: process.env.DB_DIALECT || "mysql",
//     ssl: process.env.DB_SSL === "true", // optional SSL toggle
//   },

//   accessTokenSecret: process.env.ACCESS_TOKEN_SECRET || "123456789",
//   nodeEnv: process.env.NODE_ENV || "development",
// });

// module.exports = config;

// config.js
require("dotenv").config();

const config = {
  port: process.env.PORT || 3000,

  db: {
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 3306,
    dialect: process.env.DB_DIALECT || "mysql",
    ssl: process.env.DB_SSL === "true",
  },

  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET || "default_secret",
  nodeEnv: process.env.NODE_ENV || "development",
};

module.exports = config;