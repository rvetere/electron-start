import React from "react";
import { client } from "./graphql/initApollo";
import { ApolloProvider } from "@apollo/react-hooks";
import { Home } from "./home";

export const App = () => (
  <ApolloProvider client={client}>
    <Home />
  </ApolloProvider>
);
