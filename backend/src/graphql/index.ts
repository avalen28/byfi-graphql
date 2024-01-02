// ESM
import { faker } from "@faker-js/faker";
import { readFileSync } from "fs";
import path from "path";
import User from "./interfaces/User";
import Post from "./interfaces/Post";

const userTypes = readFileSync(path.join(__dirname, "./typeDefs/user.graphql"));
const postTypes = readFileSync(path.join(__dirname, "./typeDefs/post.graphql"));

export const typeDefs = `${userTypes} ${postTypes}`;

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

function createRandomPost(): Post {
  return {
    id: +faker.string.numeric(),
    title: faker.word.words(3),
    content: faker.word.words(20),
  };
}

export const resolvers = {
  Query: {
    user() {
      return createRandomUser();
    },
    users() {
      return faker.helpers.multiple(createRandomUser, {
        count: 5,
      });
    },
    post() {
      return createRandomPost();
    },
    posts() {
      return faker.helpers.multiple(createRandomPost, {
        count: 5,
      });
    },
  },
};
