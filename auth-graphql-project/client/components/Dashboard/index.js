import { useQuery } from "@apollo/client";
import currentUserQuery from "../../queries/CurrentUser";
import { Navigate } from "react-router-dom";
import React, { useEffect } from "react";
const Dashboard = () => {
  const { data, loading } = useQuery(currentUserQuery);

  useEffect(() => {
    if (!data.user && loading) {
      <Navigate to="/login" />;
    } else {
      return;
    }
  }, [data.user]);
  return <div>You are logged in.</div>;
};

export default Dashboard;
