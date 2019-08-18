import React from "react";
import client from "./apolloClient";
import { ApolloProvider } from "@apollo/react-hooks";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App" />
    </ApolloProvider>
  );
}

export default App;
