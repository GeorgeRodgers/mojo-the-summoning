const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Attack } = require('./Attack')
const { db } = require('../db/config')

// define in global scope
let attack

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  attack = await Attack.create({ 
    title: 'testAttack',
    mojoCost: 50,
    staminaCost: 100,
   })
})

// clear db after tests
afterAll(async () => await db.close())

describe('Card', () => {
  it('has an id', async () => {
    expect(attack).toHaveProperty('id')
  })
  it('initilizes with the correct id', async () => {
    expect(attack.id).toBe(1)
  })
  it('has a title', async () => {
    expect(attack).toHaveProperty('title')
  })
  it('initilizes with the correct name', async () => {
    expect(attack.title).toBe('testAttack')
  })
  it('has a mojoCost value', async () => {
    expect(attack).toHaveProperty('mojoCost')
  })
  it('initilizes with the correct mojoCost value', async () => {
    expect(attack.mojoCost).toBe(50)
  })
  it('has a staminaCost value', async () => {
    expect(attack).toHaveProperty('staminaCost')
  })
  it('initilizes with the correct staminaCost value', async () => {
    expect(attack.staminaCost).toBe(100)
  })
})
