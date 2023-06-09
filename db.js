// imports sequelize module
const Sequelize = require("sequelize");

// connects database to server
const db = new Sequelize({
  dialect: "postgres",
  host: "dpg-ci1kmm0rddl1m6hknfbg-a",
  port: "5432",
  database: "myadvisor_database",
  username: "myadvisor_database_user",
  password: "YuKpP0lz6KhxNnsRLExqDQrl64bJj6OS",
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
