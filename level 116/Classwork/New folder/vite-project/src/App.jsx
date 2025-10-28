import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>Count: {count}</h2>
      <button 
        onClick={increment} 
        className="btn">
        Increment
      </button>
    </div>
  );
}
