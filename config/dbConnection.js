const { Sequelize } = require('sequelize');
require('dotenv').config();


const dbConnection = new Sequelize(process.env.MYSQL, 
    {
        dialect: 'mysql',
        logging: false
    }
)

module.exports = {dbConnection}
