import { useEffect } from "react";

export default function ConsoleLogOnce() {
  useEffect(() => {
    console.log("Hello useEffect!");
  }, []);

  return (
    <div>
      <h2>Check your console!</h2>
    </div>
  );
}
