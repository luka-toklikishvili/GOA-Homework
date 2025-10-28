import { useState, useEffect } from "react";

export default function QuoteApp() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchQuote() {
    setLoading(true);
    try {
      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();
      setQuote({ text: data.content, author: data.author });
    } catch (err) {
      console.error("Error fetching quote:", err);
      setQuote({
        text: "Failed to load quote 😢 Please try again.",
        author: "",
      });
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full text-center">
        <h1 className="text-2xl font-semibold mb-4">🎲 Random Quote Generator</h1>

        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : (
          quote && (
            <>
              <p className="text-lg text-gray-800 italic mb-2">“{quote.text}”</p>
              <p className="text-gray-500 mb-4">— {quote.author || "Unknown"}</p>
            </>
          )
        )}

        <button
          onClick={fetchQuote}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
          disabled={loading}
        >
          {loading ? "Loading..." : "New Quote"}
        </button>
      </div>
    </div>
  );
}

