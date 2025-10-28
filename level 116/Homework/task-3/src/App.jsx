import { useEffect } from "react";

export default function PageLoadedText() {
  useEffect(() => {
    console.log("Page is ready!");
  }, []);

  return (
    <div>
      <h2>Page loaded</h2>
    </div>
  );
}
