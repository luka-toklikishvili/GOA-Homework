import React from "react";
import { Link } from "react-router-dom";

const UserLinks = () => {
  return (
    <div>
      <h2>Test Users:</h2>
      <Link to="/user/1">User 1</Link> <br />
      <Link to="/user/2">User 2</Link> <br />
      <Link to="/user/xyz">User xyz</Link>
    </div>
  );
};

export default UserLinks;