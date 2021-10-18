import express from "express";

const router = express.Router();

let orders = [
  {
    id: "1",
    title: "new mobile order",
    date: "2016-09-22",
    type: "iPhone13",
    customer: "customer-1",
  },
  {
    id: "2",
    title: "new mobile order",
    date: "2016-09-22",
    type: "iPhone13",
    customer: "customer-2",
  },
  {
    id: "3",
    title: "new mobile order",
    date: "2016-09-22",
    type: "iPhone13",
    customer: "customer-3",
  },
];

// POST /orders

router.post("/", (req, res, next) => {
  const { title, type, customer } = req.body;

  const order = {
    id: Date.now().toString(),
    title,
    date: new Date(),
    type,
    customer,
  };
  orders = [order, ...orders];
  res.status(201).json(order);
});

// GET /orders
router.get("/", (req, res, next) => {
  res.status(200).json(orders);
});

// GET /orders/{id}

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  const order = orders.filter((order) => order.id === id);

  if (order) {
    res.status(200).json(order);
  } else {
    res.status(404).json({ message: `order id(${id}) not found` });
  }
});

// GET /orders/{type}/{date}
router.get("/:type/:date", (req, res, next) => {
  const type = req.params.type;
  const date = req.params.date;

  //filter only orders that has type & date from user input variable
  const filterOrder = orders.filter(
    (order) => order.type === type && order.date === date
  );

  // get number of orders(count) , list of ids and customer's name from filtered orders
  const countOrders = filterOrder.length;
  const idList = filterOrder.map((order) => order.id);
  const customerList = filterOrder.map((order) => order.customer);

  const result = {
    type,
    count: countOrders,
    orders: idList,
    related_customers: customerList,
  };

  if (result) {
    res.status(200).json(result);
  } else {
    res.status(404).json({ message: `order id not found` });
  }
});

export default router;
