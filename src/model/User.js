const Sequelize = require('sequelize');
const sequelize = require("../config/config");

const User = sequelize.define('User', {
    email:{
        type: Sequelize.DataTypes.STRING,
        unique: true
    },
    password:{
        type:Sequelize.DataTypes.STRING
    }
})

module.exports = User;