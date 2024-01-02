import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(
        `Graphql error ${message} with location ${location} and path ${path}`
      );
    });
  }
});

const backendConnexion = from([
  errorLink,
  new HttpLink({ uri: process.env.BACKEND_URL + "/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: backendConnexion,
});
function App() {
  return <ApolloProvider client={client}></ApolloProvider>;
}

export default App;
