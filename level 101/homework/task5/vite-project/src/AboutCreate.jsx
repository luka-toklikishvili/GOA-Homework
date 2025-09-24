import React from "react";
import { useNavigate } from "react-router-dom";
import CreateWrapper from "./CreateWrapper";

const AboutCreate = () => {
  const navigate = useNavigate();

  return (
    <CreateWrapper>
      <h1>About Create Page</h1>
      <button onClick={() => navigate("/about")}>
        Go back to About
      </button>
    </CreateWrapper>
  );
};

export default AboutCreate;
