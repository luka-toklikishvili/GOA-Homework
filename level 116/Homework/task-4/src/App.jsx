import { useState, useEffect } from "react";

export default function ShowCountChange() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count is now: " + count);
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}

