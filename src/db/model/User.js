const sequelize = require("../sequelize");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
    },
    email: {
        type: DataTypes.STRING(150),
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(150),
        allowNull: false,
    },
    fullname: {
        type: DataTypes.STRING(150),
        allowNull: false,
    }
});

(() => {
    sequelize.sync({ alter: true });
})();

module.exports = User;