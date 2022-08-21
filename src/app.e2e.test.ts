import request from "supertest";

import { app } from "./app";

test("[e2e] Create lesson", async () => {
  const response = await request(app)
    .post("/lessons")
    .send({ title: "new lesson", description: "a new lesson" });

  expect(response.status).toBe(201);
  expect(response.body.message).toBe(undefined);
});
