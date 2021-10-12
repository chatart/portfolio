import * as React from "react";
import { Link } from "gatsby";

const Navigation = () => {
  return (
    <ul>
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="/about">about</Link>
      </li>
      <li>
        <Link to="/contact">contact</Link>
      </li>
    </ul>
  );
};

export default Navigation;
