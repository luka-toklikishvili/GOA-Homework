import React from "react";
import { useNavigate } from "react-router-dom";

const AboutCreate = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>About Create Page</h1>
      <button onClick={() => navigate("/about")}>
        Go back to About
      </button>
    </div>
  );
};

export default AboutCreate;

