import React from "react";
import { useQuery } from "@apollo/client";
import query from "../../queries/CurrentUser";
import { Link } from "react-router-dom";

const Header = () => {
  const { loading, user } = useQuery(query);

  const renderButtons = () => {
    if (loading) {
      return <p>Loading...</p>;
    }
    if (user) {
      return <div>Logout</div>;
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
