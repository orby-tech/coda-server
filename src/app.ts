import express from "express";

const app = express();
const port = 3000;


/* @ts-ignore */
app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
