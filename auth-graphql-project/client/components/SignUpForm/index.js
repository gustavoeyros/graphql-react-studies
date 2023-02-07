import React from "react";
import AuthForm from "../AuthForm";
import mutation from "../../mutations/Signup";
import { useMutation } from "@apollo/client";
import { useState, useEffect } from "react";
import query from "../../queries/CurrentUser";
import { useNavigate } from "react-router-dom";
const SignUpForm = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);
  const [signup, { data }] = useMutation(mutation);
  const onSubmit = ({ email, password }) => {
    signup({
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
      <h3>Sign Up</h3>
      <AuthForm onSubmit={onSubmit} errors={errors} />
    </div>
  );
};

export default SignUpForm;
