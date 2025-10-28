import React, { useEffect, useState } from "react";

export default function RandomPhoto() {
  // 1️⃣ state ფოტოს შესანახად
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);

  // 2️⃣ ფუნქცია ფოტოს წამოსაღებად
  async function fetchRandomPhoto() {
    try {
      setLoading(true);
      const res = await fetch("https://api.unsplash.com/photos/random?client_id=5gIvqYvkFgyFgy3BJOrpyGivKyl6WbkOpLY-nxaIT3M");
      const data = await res.json();
      setPhoto(data);
    } catch (error) {
      console.error("Error fetching photo:", error);
    } finally {
      setLoading(false);
    }
  }

  // 3️⃣ useEffect — პირველად ჩაიტვირთოს ფოტო
  useEffect(() => {
    fetchRandomPhoto();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-80 bg-gray-50 rounded-2xl shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">🎲 Random Photo</h2>

      {/* Loading indicator */}
      {loading && <p className="text-gray-500">Loading...</p>}

      {/* Image */}
      {photo && !loading && (
        <img
          src={photo.urls?.small}
          alt={photo.alt_description || "Random"}
          className="w-72 h-64 object-cover rounded-xl shadow-md border"
        />
      )}

      <button
        onClick={fetchRandomPhoto}
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition"
      >
        New Photo 🔁
      </button>
    </div>
  );
}

