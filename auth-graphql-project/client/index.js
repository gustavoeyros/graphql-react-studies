import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "./components/App";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import { HttpLink } from "@apollo/client";
import Dashboard from "./components/Dashboard";
import RequireAuth from "./components/RequireAuth";
const link = new HttpLink({
  uri: "/graphql",
  credentials: "same-origin",
});

const client = new ApolloClient({
  link,
  connectToDevTools: true,
  cache: new InMemoryCache({
    dataIdFromObject: (o) => o.id,
  }),
});

const Root = () => {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="login" element={<LoginForm />} />
            <Route path="signup" element={<SignUpForm />} />
            <Route
              path="/dashboard"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />
          </Route>
        </Routes>
      </ApolloProvider>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.querySelector("#root")).render(<Root />);
