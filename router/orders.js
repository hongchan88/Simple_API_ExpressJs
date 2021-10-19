import express from "express";
import * as ordersController from "../controller/orders.js";

const router = express.Router();

// POST /orders
router.post("/", ordersController.createOrders);

// GET /orders ( get all orders)
router.get("/", ordersController.getAllOrders);

// GET /orders/{id} ( get order by id)
router.get("/:id", ordersController.getOrdersById);

// GET /orders/{type}/{date} (get order by type & date)
router.get("/:type/:date", ordersController.getOrdersByTypeDate);

export default router;
