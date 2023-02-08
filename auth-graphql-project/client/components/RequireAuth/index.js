import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import currentUserQuery from "../../queries/CurrentUser";
import { useNavigate, Navigate } from "react-router-dom";
const RequireAuth = (props) => {
  const navigate = useNavigate();
  const { data, loading } = useQuery(currentUserQuery);
  const [isLogged, setIsLogged] = useState(null);

  const checkUser = () => {
    if (!data.user && !loading) {
      setIsLogged(false);
    } else {
      setIsLogged(true);
    }
  };

  useEffect(() => {
    checkUser();
    if (isLogged) {
      return;
    }
    if (isLogged === false || !data.user) {
      <Navigate to="login" />;
    }
  }, [isLogged, data]);

  return props.children;
};

export default RequireAuth;
