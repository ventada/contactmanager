import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
const Header = props => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm-navbar-dark bg-danger mb-3 py-0">
        <div className="container">
          <a href="/" style={{ color: "white" }} className="navbar-brand">
            {props.branding}
          </a>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" style={{ color: "white" }} className="nav-link">
                  <i className="fas fa-home" /> Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/contact/add"
                  style={{ color: "white" }}
                  className="nav-link"
                >
                  <i className="fas fa-plus" /> Add
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/about"
                  style={{ color: "white" }}
                  className="nav-link"
                >
                  <i className="fas fa-question" /> About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
