// imports sequelize module
const Sequelize = require("sequelize");

// connects database to server
const db = new Sequelize({
  dialect: "sqlite",
  storage: "db-sqlite", // specify the path to your SQLite database file
  pool: {
    max: 3,
    min: 0,
    idle: 10000,
  },
});

// tests database connection on server startup to see if the connection is OK.
db.authenticate()
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("Error: " + err));

module.exports = db;
