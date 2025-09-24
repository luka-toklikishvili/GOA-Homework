import React from "react";

const CreateWrapper = ({ children }) => {
  return (
    <div>
      <h2>You are on a Create page</h2>
      <div>{children}</div>
    </div>
  );
};

export default CreateWrapper;
