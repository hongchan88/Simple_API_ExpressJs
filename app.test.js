import request from "supertest";
import app from "./app.js";

// test POST /orders
describe("POST /orders", () => {
  describe("given a type ,title and customer name", () => {
    test("create new order with input type , title and customer value", async () => {
      const response = await request(app).post("/orders").send({
        title: "test title",
        type: "SamsungNote",
        customer: "customer-22",
      });
      expect(response.statusCode).toBe(201);
    });
    test("should return json string", async () => {
      const response = await request(app).post("/orders").send({
        title: "test title",
        type: "SamsungNote",
        customer: "customer-22",
      });
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
    test("should json contain id", async () => {
      const response = await request(app).post("/orders").send({
        title: "test title",
        type: "SamsungNote",
        customer: "customer-22",
      });

      for (const body of response.body) {
        expect(body.id).toBeDefined();
      }
    });
  });

  // test POST Validation check
  describe("validation check when input is missing ", () => {
    test("should respond with a status code of 400", async () => {
      const bodyData = [{ title: "" }, { type: "" }, { customer: "" }];
      for (const body of bodyData) {
        const response = await request(app).post("/orders").send(body);
        expect(response.statusCode).toBe(400);
      }
    });
    test("should return validation message", async () => {
      const bodyData = [{ title: "" }, { type: "" }, { customer: "" }];
      for (const body of bodyData) {
        const response = await request(app).post("/orders").send(body);

        expect(response.body.message).toBeDefined;
      }
    });
  });
});
// test GET /orders
describe("GET /orders", () => {
  describe("get all orders ", () => {
    test("get all orders", async () => {
      const response = await request(app).get("/orders");
      expect(response.statusCode).toBe(200);
    });
  });
});

// test GET /orders/:id
describe("GET /orders/:id", () => {
  describe("get order by id", () => {
    test("get order by id", async () => {
      const response = await request(app).get("/orders/1");
      expect(response.statusCode).toBe(200);
    });
  });
});

// test GET /orders/:type/:date
describe("GET /orders/:type/:date", () => {
  describe("get order by type and date", () => {
    test("get order by type and date", async () => {
      const response = await request(app).get("/orders/iPhone13/2016-09-22");
      expect(response.statusCode).toBe(200);
    });
  });
});
