const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("nodejs-db", "root", "desenv", {
  host: "localhost",
  dialect: "postgres",
});

try {
  sequelize.authenticate();
  console.log("Connected to nodejs-db");
} catch (err) {
  console.log("Error to connect to database: ", err);
}

module.exports = sequelize;
