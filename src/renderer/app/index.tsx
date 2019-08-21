import { hot } from "react-hot-loader/root";

import React from "react";
import { client } from "./graphql/initApollo";
import { ApolloProvider } from "@apollo/react-hooks";
import { Home } from "./home";

const App = () => (
  <ApolloProvider client={client}>
    <Home />
  </ApolloProvider>
);

export default hot(App);
