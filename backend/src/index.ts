import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { typeDefs, resolvers } from "./graphql";

dotenv.config();
const app = express();
const port = process.env.PORT || 2000;

const initServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();

  app.use(
    cors({
      origin: process.env.ORIGIN,
    })
  );

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.get("/", (req, res) => {
    console.log("hello!");
  });
  app.use("/graphql", expressMiddleware(server));

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log(`GraphQL ready at http://localhost:${port}/graphql`);
  });
};

initServer();
