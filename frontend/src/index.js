import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { UsersDataWrapper } from "./context/UsersContext";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      return alert(
        `Graphql error ${message} with location ${location} and path ${path}`
      );
    });
  }
});
const backendConnexion = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:8080/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: backendConnexion,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <UsersDataWrapper>
      <Router>
        <App />
      </Router>
    </UsersDataWrapper>
  </ApolloProvider>
);
