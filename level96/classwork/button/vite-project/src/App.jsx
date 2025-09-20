import * as React from "react";
import Button from "@mui/material/Button";

export default function App() {
  return (
    <div style={{ display: "flex", gap: "1rem", padding: "2rem" }}>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </div>
  );
}