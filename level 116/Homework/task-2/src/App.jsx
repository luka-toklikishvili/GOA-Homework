import { useState, useEffect } from "react";

export default function ChangeMessage() {
  const [message, setMessage] = useState("Hi");

  useEffect(() => {
    console.log("Message changed!");
  }, [message])

  return (
    <div>
      <h2>Message: {message}</h2>
      <button onClick={() => setMessage("Hello!")}>Change Message</button>
      <button onClick={() => setMessage("Hi again!")}>Reset Message</button>
    </div>
  );
}

