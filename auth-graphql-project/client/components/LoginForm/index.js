import React from "react";
import AuthForm from "../AuthForm";
import mutation from "../../mutations/Login";
import { useMutation } from "@apollo/client";
import query from "../../queries/CurrentUser";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);
  const [login, { data }] = useMutation(mutation);
  const onSubmit = ({ email, password }) => {
    login({
      variables: { email, password },
      refetchQueries: [{ query }],
    }).catch((res) => {
      const errors = res.graphQLErrors.map((error) => error.message);
      setErrors(errors);
    });
  };

  useEffect(() => {
    if (data) {
      navigate("/dashboard");
    }
  }, [data]);
  return (
    <div>
      <div>
        <h3>Login</h3>
        <AuthForm errors={errors} onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default LoginForm;
