// create your User model here

const { db, DataTypes, Model } = require(`../db/config.js`) // imports the database and Sequelize files from the config file

class User extends Model {};

User.init({
    username: DataTypes.STRING
}, {
    sequelize: db,
    modelName: `User`
});

module.exports = { User };