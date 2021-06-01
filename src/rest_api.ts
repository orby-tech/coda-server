import express from "express";
import { ListOfSenders, SenderInputModel } from "./list_of_senders";

const listOfSenders = new ListOfSenders();

export const rest_api_fill = (app: express.Express) => {
  app.get("/list-of-senders/", (req, res) => {
    res.send(listOfSenders.getList());
  });

  app.post("/list-of-senders/add/", (req: { body: SenderInputModel }, res) => {
    listOfSenders.addItem(req.body);
  });

  app.post("/list-of-senders/delete/", (req: { body: { id: string } }, res) => {
    listOfSenders.deleteItem(req.body.id);
  });
};
