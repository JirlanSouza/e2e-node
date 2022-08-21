import { InMemoryLessonsRepository } from "../repositories/inMemory/InMemoryLessonsRepository";
import { CreateLesson } from "./CreateLesson";

describe("Create lesson service", () => {
  test("Should be able create a new lesson", () => {
    const inMemoryLessonsRepository = new InMemoryLessonsRepository();
    const createLesson = new CreateLesson(inMemoryLessonsRepository);

    expect(
      createLesson.execute({
        title: "new lesson",
        description: " a new lesson",
      })
    ).resolves.not.toThrow();

    expect(inMemoryLessonsRepository.lessons).toEqual(
      expect.arrayContaining([expect.objectContaining({ title: "new lesson" })])
    );
  });

  test("Should not be able create a new lesson", () => {
    const inMemoryLessonsRepository = new InMemoryLessonsRepository();
    const createLesson = new CreateLesson(inMemoryLessonsRepository);

    expect(
      createLesson.execute({
        title: "",
        description: " a new lesson",
      })
    ).rejects.toThrow();

    expect(inMemoryLessonsRepository.lessons).toEqual(
      expect.arrayContaining([])
    );
  });
});
