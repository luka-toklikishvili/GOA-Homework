import { useState, useEffect } from "react";

export default function InputWatcher() {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("User typed: " + text);
  }, [text])

  return (
    <div>
      <h2>Type something:</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing..."
      />
      <p>You typed: {text}</p>
    </div>
  );
}

