import React from "react";
import { useState } from "react";
const AuthForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSubmit({ email, password });
  };
  return (
    <div className="row">
      <form className="col s4" onSubmit={submitHandler}>
        <div className="input-field">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div className="input-field">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>

        <div className="errors">
          {props.errors.map((error) => (
            <div key={error}> {error} </div>
          ))}
        </div>

        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default AuthForm;
