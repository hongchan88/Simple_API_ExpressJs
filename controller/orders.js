import * as ordersRepository from "../data/orders.js";

export async function createOrders(req, res) {
  const { title, type, customer } = req.body;
  const order = await ordersRepository.create(title, type, customer);
  console.log(order);

  res.status(201).json(order);
}

export async function getAllOrders(req, res) {
  res.status(200).json(await ordersRepository.getAll());
}

export async function getOrdersById(req, res) {
  const id = req.params.id;
  const order = await ordersRepository.getById(id);

  if (order) {
    res.status(200).json(order);
  } else {
    res.status(404).json({ message: `order id(${id}) not found` });
  }
}

export async function getOrdersByTypeDate(req, res) {
  const type = req.params.type;
  const date = req.params.date;

  const result = await ordersRepository.getByTypeDate(type, date);

  if (result.count === 0) {
    res.status(404).json({ message: `Matching order is not found` });
  } else if (result) {
    res.status(200).json(result);
  }
}
