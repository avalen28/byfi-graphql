import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import Dashboard from "./views/Dashboard";
import { Route, Routes } from "react-router-dom";
import UserDetail from "./views/UserDetail";
import PostDetail from "./views/PostDetail";


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

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path="/home" element={<Dashboard />} />
        <Route path="/user/detail" element={<UserDetail />} />
        <Route path="/post/detail" element={<PostDetail />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </ApolloProvider>
  );
}

export default App;
