// add your database connection here

// In order to use sequelize we must first install it through the command line with the following commands:
// npm init -y
// npm i sequelize sqlite3
// the same can be done for squelize and jest

const { Sequelize, Model, DataTypes } = require(`sequelize`); // Imports Squelize
const path = require(`path`); // Imports path

const db = new Sequelize({ // Sequelize is a class and so it we create an instance of it with the folowing parameters
    dialect: `sqlite`,
    storage: path.join(__dirname, `db.sqlite`)
});

db.authenticate(); // authenticate method is not required but it forces the creation of the database an enables us to check we have succesfully created the instance

module.exports = { db, Model, DataTypes }