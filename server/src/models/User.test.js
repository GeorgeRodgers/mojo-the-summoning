const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { User } = require('./User')
const { db } = require('../db/config')

// define in global scope
let user

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  user = await User.create({ 
    username: 'gandalf'
  })
})

// clear db after tests
afterAll(async () => await db.close())

describe('User', () => {
  it('has an id', async () => {
    expect(user).toHaveProperty('id')
  })
  it('initilizes with the correct id', async () => {
    expect(user.id).toBe(1)
  })
  it('has an username', async () => {
    expect(user).toHaveProperty('username')
  })
  it('initilizes with the correct username', async () => {
    expect(user.username).toBe('gandalf')
  })
})
