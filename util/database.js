const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete','root', 'tastasalg',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;