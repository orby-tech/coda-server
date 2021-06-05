import express from 'express'
import { restApiFill, getListOfSenders, addItemToListOfSenders, deleteItemFromListOfSenders } from './rest_api'
import request from 'supertest'

let app: express.Express

describe('Rest api', () => {
  beforeEach(() => {
    app = express()
  })
  test('Check fill rest api', () => {
    const res = restApiFill(app)
    expect(res).toBe(undefined)
  })
  test('/list-of-senders/', async () => {
    app.use('/', getListOfSenders)
    const { body } = await request(app).get('/list-of-senders/')
    expect(Array.isArray(body)).toBeTruthy()
  })

  test('/list-of-senders/add', async () => {
    app.use('/', addItemToListOfSenders)
    const { body } = await request(app).post('/list-of-senders/add/')
    expect(Object.keys(body).length).toBe(0)
  })

  test('/list-of-senders/delete', async () => {
    app.use('/', deleteItemFromListOfSenders)
    const { body } = await request(app).post('/list-of-senders/delete/')
    expect(Object.keys(body).length).toBe(0)
  })
})
