export const typeDefs = `
    type User {
        id: Int
        name: String
        username: String
        email: String
        phone: String
        website: String
    }

    type Query {
        user(id: Int!): User
        users: [User]
    }
`;

export const resolvers = {
  Query: {
    user() {},
    users() {},
  },
  //   Mutation: {},
};
