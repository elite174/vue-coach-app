import { CoachData } from "./interfaces";
import faker from "faker";

export const generateCoaches = (amount = 10) => {
  const result: CoachData[] = [];

  for (let i = 0; i < amount; i++) {
    const skillCount = 1 + Math.round(2 * Math.random());

    result.push({
      id: faker.random.uuid(),
      name: faker.name.findName(),
      description: faker.lorem.paragraph(),
      salary: faker.random.number(100),
      skills: new Array(skillCount).fill("").map(() => faker.name.jobArea())
    });
  }

  return result;
};
