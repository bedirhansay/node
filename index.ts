import express from "express";

import { addTimestamp, errorHandler, logger } from "@middleware";
import { calculatorRouter, healthRouter } from "@routes";

const app = express();
const port = 3000;

app.use(express.json());
app.use(addTimestamp);
app.use(logger);
app.get("/", (req, res) => {
  res.send("<h1>Commit</h1>");
});
app.use("/health", healthRouter);
app.use("/calculator", calculatorRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
