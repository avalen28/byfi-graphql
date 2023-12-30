// ESM
import { faker } from "@faker-js/faker";
import { readFileSync } from "fs";
import path from "path";
import User from "./interfaces/User";

const userTypes = readFileSync(path.join(__dirname, "./typeDefs/user.graphql"));

export const typeDefs = `${userTypes}`;

function createRandomUser(): User {
  return {
    id: +faker.string.numeric(),
    name: faker.person.firstName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    website: faker.internet.url(),
  };
}

export const resolvers = {
  Query: {
    user() {
      createRandomUser();
    },
    users() {
      return faker.helpers.multiple(createRandomUser, {
        count: 5,
      });
    },
  },
};
