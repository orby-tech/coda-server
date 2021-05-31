import express from "express";

export const rest_api_fill = (app: express.Express) => {
  app.get("/", (req, res) => {
    res.send("The sedulous hyena ate the antelope!");
  });
};
