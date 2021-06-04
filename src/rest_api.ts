import express from 'express'
import { ListOfSenders, SenderInputModel } from './list_of_senders'

const listOfSenders = new ListOfSenders()

export const getListOfSenders = (req, res) => {
  res.send(listOfSenders.getList())
}
export const addItemToListOfSenders = (req: { body: SenderInputModel }, res) => {
  listOfSenders.addItem(req.body)
}
export const deleteItemFromListOfSenders = (req: { body: { id: string } }, res) => {
  listOfSenders.deleteItem(req.body.id)
}

export const restApiFill = (app: express.Express) => {
  app.get('/list-of-senders/', getListOfSenders)
  app.post('/list-of-senders/add/', addItemToListOfSenders)
  app.post('/list-of-senders/delete/', deleteItemFromListOfSenders)
}
