const { Sequelize } = require('sequelize');


const dbConnection = new Sequelize('proyecto-final', 'root', '', 
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    }
)

module.exports = {dbConnection}