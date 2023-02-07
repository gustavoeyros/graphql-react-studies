import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "./components/App";
import { HttpLink } from "@apollo/client";

const link = new HttpLink({
  uri: "/graphql",
  credentials: "same-origin",
});

const client = new ApolloClient({
  link,
  connectToDevTools: true,
  dataIdFromObject: (o) => o.id,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.querySelector("#root")).render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </ApolloProvider>
  </BrowserRouter>
);
