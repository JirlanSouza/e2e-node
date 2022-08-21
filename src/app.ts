import express from "express";
import { PrismaLessonsRepository } from "./repositories/prisma/PrismaLessonsRepository";
import { CreateLesson } from "./services/CreateLesson";

export const app = express();

app.use(express.json());

app.post("/lessons", async (request, response) => {
  const { title, description } = request.body;

  const prismaLessonsRepository = new PrismaLessonsRepository();
  const createLessonsService = new CreateLesson(prismaLessonsRepository);

  try {
    await createLessonsService.execute({ title, description });
    return response.status(201).end();
  } catch (err: any) {
    return response.status(400).json({ message: err.message });
  }
});
