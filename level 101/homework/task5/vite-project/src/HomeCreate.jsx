import React from "react";
import { useNavigate } from "react-router-dom";
import CreateWrapper from "./CreateWrapper";

const HomeCreate = () => {
  const navigate = useNavigate();

  return (
    <CreateWrapper>
      <h1>Home Create Page</h1>
      <button onClick={() => navigate("/")}>
        Go back to Home
      </button>
    </CreateWrapper>
  );
};

export default HomeCreate;
