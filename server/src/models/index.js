const { User } = require('./User')
// import the rest of your models above
const { Deck } = require(`./Deck`)
const { Card } = require(`./Card`)
const { Attack } = require(`./Attack`)

// set up the associations here

User.hasOne(Deck);
Deck.belongsTo(User);

Deck.hasMany(Card);
Card.belongsTo(Deck);

Card.belongsToMany(Attack, {through: `cardAttacks`});
Attack.belongsToMany(Card, {through: `cardAttacks`});

// and then export them all below
module.exports = { 
    User,
    Deck,
    Card,
    Attack
 }
