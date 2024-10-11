const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Card } = require('./Card')
const { db } = require('../db/config')

// define in global scope
let card

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  card = await Card.create({ 
    name: 'testCard',
    mojo: 50,
    stamina: 100,
    imgUrl: `testUrl`
   })
})

// clear db after tests
afterAll(async () => await db.close())

describe('Card', () => {
  it('has an id', async () => {
    expect(card).toHaveProperty('id')
  })
  it('initilizes with the correct id', async () => {
    expect(card.id).toBe(1)
  })
  it('has a name', async () => {
    expect(card).toHaveProperty('name')
  })
  it('initilizes with the correct name', async () => {
    expect(card.name).toBe('testCard')
  })
  it('has a mojo value', async () => {
    expect(card).toHaveProperty('mojo')
  })
  it('initilizes with the correct mojo value', async () => {
    expect(card.mojo).toBe(50)
  })
  it('has a stamina value', async () => {
    expect(card).toHaveProperty('stamina')
  })
  it('initilizes with the correct stamina value', async () => {
    expect(card.stamina).toBe(100)
  })
  it('has a imgUrl', async () => {
    expect(card).toHaveProperty('imgUrl')
  })
  it('initilizes with the correct imgUrl', async () => {
    expect(card.imgUrl).toBe(`testUrl`)
  })
})
