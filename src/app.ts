import express from "express";
import cors from "cors";
import { rest_api_fill } from "./rest_api";
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

rest_api_fill(app);

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
