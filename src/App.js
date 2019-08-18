import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import client from "./apolloClient";
import { ApolloProvider } from "@apollo/react-hooks";
import Home from "./Home";
import Detail from "./Detail";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Route exact={true} path={"/"} component={Home} />
        <Route exact={true} path={"/detail/:movieId"} component={Detail} />
      </Router>
    </ApolloProvider>
  );
}

export default App;
