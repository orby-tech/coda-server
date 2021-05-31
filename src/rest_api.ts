import express from "express";

export const rest_api_fill = (app: express.Express) => {
  app.get("/", (req, res) => {
    res.send("The sedulous hyena ate the antelope!");
  });

  app.get("/list-of-senders/", (req, res) => {
    const listOfSenders = [
      {
        id: "123123123",
        target: "telegram",
        count_of_days: "42",
        last_send_date: "last_send_date",
        subject: "1231234124",
      },
    ];
    res.send(listOfSenders);
  });
};
