import React from "react";
import { CounterProvider } from "./components/CounterContext";
import Contacts from "./components/Contacts";
import Profile from "./components/Profile";

export default function App() {
  return (
    <CounterProvider>
      <div
        style={{
          display: "flex",
          border: "2px solid black",
          margin: "20px",
        }}
      >
        <Contacts />
        <Profile />
      </div>
    </CounterProvider>
  );
}

