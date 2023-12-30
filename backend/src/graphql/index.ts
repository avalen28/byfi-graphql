// ESM
import { faker } from "@faker-js/faker";

export const typeDefs = `
    type User {
        id: Int
        name: String
        username: String
        email: String
        phone: String
        website: String
    }

    type Post {
        id: Int
        title: String
        content: String
    }

    type Query {
        user(id: Int!): User
        users: [User]
    }
`;

function createRandomUser() {
  return {
    id: faker.number.int(),
    name: faker.person.firstName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    website: faker.internet.url(),
  };
}

const USERS = faker.helpers.multiple(createRandomUser, {
  count: 5,
});

export const resolvers = {
  Query: {
    user() {},
    users() {},
  },
};
