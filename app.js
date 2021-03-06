import express from "express";
import OrderRouter from "./router/orders.js";

const app = express();

// middleware to change body to json
app.use(express.json());

app.use("/orders", OrderRouter);

// 404 status not found
app.use((req, res, next) => {
  res.sendStatus(404);
});

// 500 status error code
app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

export default app;
