import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import query from "../../queries/CurrentUser";
import { Link, useNavigate } from "react-router-dom";
import mutation from "../../mutations/Logout";

const Header = () => {
  const navigate = useNavigate();
  const { loading, data } = useQuery(query);
  const [logout] = useMutation(mutation);
  console.log(data);
  const onLogoutClick = () => {
    logout({
      refetchQueries: [{ query }],
    });
    navigate("/login");
  };

  const renderButtons = () => {
    if (loading) {
      return <p>Loading...</p>;
    }
    if (data.user) {
      return (
        <li>
          <a onClick={onLogoutClick}>Logout</a>
        </li>
      );
    }
    {
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
