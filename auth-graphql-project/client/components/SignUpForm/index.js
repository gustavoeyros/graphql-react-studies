import React from "react";
import AuthForm from "../AuthForm";
import mutation from "../../mutations/Signup";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import query from "../../queries/CurrentUser";
const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [signup] = useMutation(mutation);
  const onSubmit = ({ email, password }) => {
    signup({
      variables: { email, password },
      refetchQueries: [{ query }],
    }).catch((res) => {
      const errors = res.graphQLErrors.map((error) => error.message);
      setErrors(errors);
    });
  };
  return (
    <div>
      <h3>Sign Up</h3>
      <AuthForm onSubmit={onSubmit} errors={errors} />
    </div>
  );
};

export default SignUpForm;
