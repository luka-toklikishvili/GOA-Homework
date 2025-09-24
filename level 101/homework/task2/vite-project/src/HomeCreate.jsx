import React from "react";
import { useNavigate } from "react-router-dom";

const HomeCreate = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home Create Page</h1>
      <button onClick={() => navigate("/")}>
        Go back to Home
      </button>
    </div>
  );
};

export default HomeCreate;

