import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { typeDefs, resolvers } from "./graphql";
import axios from "axios";

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

  app.get("/user/details", async (req, res) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      res.json(response.data);
    } catch (error) {
      console.error(error);
    }
  });

  app.use("/graphql", expressMiddleware(server));

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log(`GraphQL ready at http://localhost:${port}/graphql`);
  });
};

initServer();
