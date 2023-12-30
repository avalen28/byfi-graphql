import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

const initServer = async () => {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.get("/", (req, res) => {
    res.send("Hello world");
  });

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
};

initServer();
