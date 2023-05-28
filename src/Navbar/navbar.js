import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Rank
      </Link>
      <ul>
        <li>
          <Link to="/gpa">GPA</Link>
        </li>
        <li>
          <Link to="/qpa">QPA</Link>
        </li>
        <li>
          <Link to="/classgrade">Class Grade</Link>
        </li>
        <li>
          <Link to="/graph">Graph</Link>
        </li>
        <li>
          <Link to="/bellcurve">Bell Curve</Link>
        </li>
      </ul>
    </nav>
  );
}

export default navbar;
