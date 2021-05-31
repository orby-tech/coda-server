import express from "express";
import cors from "cors";
import { rest_api_fill } from "./rest_api";
const app = express();
const port = 4000;

app.use(cors());

rest_api_fill(app);

/* @ts-ignore */
app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
