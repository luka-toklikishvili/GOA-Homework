import { useContext } from "react";
import { CounterContext } from "./CounterContext";

export default function Contacts() {
  const { increment } = useContext(CounterContext);

  return (
    <div
      style={{
        flex: 1,
        border: "1px solid #ccc",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h2>Contacts</h2>
      <button
        onClick={increment}
        style={{
          padding: "20px 220px",
          borderRadius: "8px",
          border: "none",
          background: "#00ff08ff",
          color: "white",
          cursor: "pointer",
        }}
      >
        Add
      </button>
    </div>
  );
}
