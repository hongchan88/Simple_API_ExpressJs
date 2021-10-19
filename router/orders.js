import express from "express";
import { body } from "express-validator";
import * as ordersController from "../controller/orders.js";

const router = express.Router();

// POST /orders
// used validator to check if title, customer,type is empty
router.post(
  "/",
  body("title").notEmpty().withMessage("title is empty"),
  body("customer").notEmpty().withMessage("customer field is emptry"),
  body("type").notEmpty().withMessage("Type field is empty"),
  ordersController.createOrders
);

// GET /orders ( get all orders)
router.get("/", ordersController.getAllOrders);

// GET /orders/{id} ( get order by id)
router.get("/:id", ordersController.getOrdersById);

// GET /orders/{type}/{date} (get order by type & date)
router.get("/:type/:date", ordersController.getOrdersByTypeDate);

export default router;
