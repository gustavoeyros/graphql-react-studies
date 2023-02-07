import React from "react";
import AuthForm from "../AuthForm";
import mutation from "../../mutations/Signup";
import { useMutation } from "@apollo/client";
const SignUpForm = () => {
  const [addUser, { data }] = useMutation(mutation);
  const onSubmit = ({ email, password }) => {
    addUser({
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
      <AuthForm onSubmit={onSubmit} errors={[]} />
    </div>
  );
};

export default SignUpForm;
