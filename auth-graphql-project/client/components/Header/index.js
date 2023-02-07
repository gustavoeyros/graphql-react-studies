import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import query from "../../queries/CurrentUser";
import { Link } from "react-router-dom";
import mutation from "../../mutations/Logout";

const Header = () => {
  const { loading, user } = useQuery(query);

  const onLogoutClick = () => {
    useMutation(mutation, {
      refetchQueries: [{ query }],
    });
  };

  const renderButtons = () => {
    if (loading) {
      return <p>Loading...</p>;
    }
    if (user) {
      return (
        <li>
          <a onClick={onLogoutClick}>Logout</a>
        </li>
      );
    } else {
      return (
        <div>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </div>
      );
    }
  };
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo left">
          Home
        </Link>
        <ul className="right">{renderButtons()}</ul>
      </div>
    </nav>
  );
};

export default Header;
