import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/">
        <h3>Logo</h3>
      </Link>
      <ul>
        <Link to="/book">
          <li>Book</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navigation;
