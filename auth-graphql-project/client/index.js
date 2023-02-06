import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "./components/App";

const client = new ApolloClient({
  dataIdFromObject: (o) => o.id,
  cache: new InMemoryCache(),
});

/* const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Route path="/" element={App} />
      </Router>
      <div>Auth Starter</div>
    </ApolloProvider>
  );
};
 */
ReactDOM.createRoot(document.querySelector("#root")).render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </ApolloProvider>
  </BrowserRouter>
);
