import React from "react";
import { useQuery } from "@apollo/client";
import currentUserQuery from "../../queries/CurrentUser";
import { Navigate } from "react-router-dom";
const RequireAuth = (props) => {
  const { data, loading } = useQuery(currentUserQuery);

  if (!data.user && loading) {
    return <Navigate to="/login" />;
  }

  return props.children;
};

export default RequireAuth;
