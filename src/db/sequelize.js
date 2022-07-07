const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
    dialect: "mysql",
    database: "career_counseller",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "password"
});

module.exports = sequelize;