import React from "react";
import AuthForm from "../AuthForm";
import mutation from "../../mutations/Login";
import { useMutation } from "@apollo/client";
import query from "../../queries/CurrentUser";
import { useState } from "react";
const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [loginUser, { data }] = useMutation(mutation);
  const onSubmit = ({ email, password }) => {
    loginUser({
      variables: { email, password },
      refetchQueries: [{ query }],
    }).catch((res) => {
      const errors = res.graphQLErrors.map((error) => error.message);
      setErrors(errors);
    });
  };
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
