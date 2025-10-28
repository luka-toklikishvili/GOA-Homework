import { useContext } from "react";
import { CounterContext } from "./CounterContext";

export default function Profile() {
  const { count } = useContext(CounterContext);

  return (
    <div
      style={{
        flex: 1,
        border: "1px solid #ccc",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h2>Profile</h2>
      <p>Button value: {count}</p>
    </div>
  );
}
