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

export async function getAll() {
  return orders;
}

export async function getById(id) {
  return orders.find((order) => order.id === id);
}

export async function create(title, type, customer) {
  const order = {
    id: Date.now().toString(),
    title,
    date: new Date().toISOString().slice(0, 10),
    type,
    customer,
  };
  orders = [...orders, order];

  return orders;
}

//filter only orders that has type & date from user input variable
export async function getByTypeDate(type, date) {
  const filterOrder = orders.filter(
    (order) => order.type === type && order.date === date
  );

  // get number of orders(count) , list of IDs and customer's name from filtered orders
  const countOrders = filterOrder.length;
  const idList = filterOrder.map((order) => order.id);
  let lastTenId = [];
  if (idList.length >= 10) {
    lastTenId = idList.slice(-10);
  } else {
    lastTenId = [...idList];
  }

  const customerList = filterOrder.map((order) => order.customer);

  const result = {
    type,
    count: countOrders,
    orders: lastTenId,
    related_customers: customerList,
  };

  return result;
}
