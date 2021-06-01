import express from "express";
import { TargetEnum } from "./models";

type SenderInputModel = {
  target: string;
  subject: string;
  date: string;
};

type SenderType = {
  id: string;
  target: string;
  count_of_days: string;
  last_send_date: string;
  event_date: string;
  subject: string;
};

class ListOfSenders {
  listOfSenders: SenderType[];
  constructor() {
    this.listOfSenders = [
      {
        id: "123123123",
        target: TargetEnum.telegram,
        count_of_days: "42",
        last_send_date: "last_send_date",
        event_date: "2021-06-01",
        subject: "1231234124",
      },
      {
        id: "123123123",
        target: TargetEnum.email,
        count_of_days: "42",
        last_send_date: "last_send_date",
        event_date: "2021-06-01",
        subject: "1231234124",
      },
    ];
  }

  getList() {
    return this.listOfSenders;
  }

  addItem(newSender: SenderInputModel) {
    this.listOfSenders.push({
      id: "123123123",
      target: TargetEnum[newSender.target],
      count_of_days: "42",
      last_send_date: "last_send_date",
      event_date: newSender.date,
      subject: newSender.subject,
    });
  }
}

const listOfSenders = new ListOfSenders();

export const rest_api_fill = (app: express.Express) => {
  app.get("/list-of-senders/", (req, res) => {
    res.send(listOfSenders.getList());
  });

  app.post("/list-of-senders/add/", (req: { body: SenderInputModel }, res) => {
    console.log(req.body);
    listOfSenders.addItem(req.body);
  });
};
