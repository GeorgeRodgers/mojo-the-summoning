const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Deck } = require('./Deck')
const { db } = require('../db/config')

let deck

beforeAll(async () => {
  await db.sync({ force: true })
  deck = await Deck.create({ 
    name: 'testDeck',
    xp: 100
   })
})

// clear db after tests
afterAll(async () => await db.close())

describe('Deck', () => {
  it('has an id', async () => {
    expect(deck).toHaveProperty('id')
  })
  it('initilizes with the correct id', async () => {
    expect(deck.id).toBe(1)
  })
  it('has an name', async () => {
    expect(deck).toHaveProperty('name')
  })
  it('initilizes with the correct name', async () => {
    expect(deck.name).toBe('testDeck')
  })
  it('has an xp value', async () => {
    expect(deck).toHaveProperty('xp')
  })
  it('initilizes with the correct xp value', async () => {
    expect(deck.xp).toBe(100)
  })
})
