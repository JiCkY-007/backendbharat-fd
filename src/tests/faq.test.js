import request from "supertest";
import app from "../app.js";
import chai from "chai";

const { expect } = chai;

describe("FAQ API Tests", () => {
  it("should create a new FAQ", async () => {
    const res = await request(app).post("/api/faqs").send({
      question: "What is Node.js?",
      answer: "Node.js is a JavaScript runtime.",
    });
    expect(res.status).to.equal(201);
    expect(res.body).to.have.property("question", "What is Node.js?");
  });
});
