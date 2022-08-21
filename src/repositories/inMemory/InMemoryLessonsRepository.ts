import { Lesson } from "@prisma/client";
import { randomUUID } from "node:crypto";

import { CreateLessonData, LessonsRepository } from "../LessonsRepository";

export class InMemoryLessonsRepository implements LessonsRepository {
  lessons: Lesson[] = [];
  async create(data: CreateLessonData): Promise<void> {
    const lesson = {
      id: randomUUID(),
      title: data.title,
      description: data.description || null,
    };
    this.lessons.push(lesson);
  }
}
