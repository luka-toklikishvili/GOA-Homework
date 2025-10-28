import React, { useEffect, useState } from "react";

const API_BASE = "https://api.unsplash.com";
const ACCESS_KEY = "5gIvqYvkFgyFgy3BJOrpyGivKyl6WbkOpLY-nxaIT3M";

export default function PhotoRequestsDemo() {
  const [photos, setPhotos] = useState([]);
  const [photo, setPhoto] = useState(null);
  const [randomPhoto, setRandomPhoto] = useState(null);
  const [stats, setStats] = useState(null);

  // --- 1️⃣ GET /photos ---
  async function fetchPhotos() {
    const res = await fetch(`${API_BASE}/photos?client_id=${ACCESS_KEY}`);
    const data = await res.json();
    setPhotos(data);
  }

  // --- 2️⃣ GET /photos/:id ---
  async function fetchPhotoById(id) {
    const res = await fetch(`${API_BASE}/photos/${id}?client_id=${ACCESS_KEY}`);
    const data = await res.json();
    setPhoto(data);
  }

  // --- 3️⃣ GET /photos/random ---
  async function fetchRandomPhoto() {
    const res = await fetch(`${API_BASE}/photos/random?client_id=${ACCESS_KEY}`);
    const data = await res.json();
    setRandomPhoto(data);
  }

  // --- 4️⃣ GET /photos/:id/statistics ---
  async function fetchPhotoStats(id) {
    const res = await fetch(
      `${API_BASE}/photos/${id}/statistics?client_id=${ACCESS_KEY}`
    );
    const data = await res.json();
    setStats(data);
  }

  // --- 5️⃣ GET /photos/:id/download ---
  async function downloadPhoto(id) {
    const res = await fetch(
      `${API_BASE}/photos/${id}/download?client_id=${ACCESS_KEY}`
    );
    const data = await res.json();
    window.open(data.url, "_blank"); // გახსნის სურათს ახალ ჩანართში
  }

  useEffect(() => {
    fetchPhotos();
    fetchRandomPhoto();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-semibold">📸 Photo API Requests Example</h2>

      {/* Random Photo */}
      {randomPhoto && (
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="font-medium mb-2">🎲 Random Photo</h3>
          <img
            src={randomPhoto.urls.small}
            alt={randomPhoto.alt_description}
            className="w-full rounded-lg"
          />
        </div>
      )}

      {/* All Photos */}
      <div>
        <h3 className="font-medium mb-2">🖼️ All Photos</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((p) => (
            <div
              key={p.id}
              className="bg-gray-50 rounded-lg shadow hover:shadow-lg transition p-2"
            >
              <img
                src={p.urls.small}
                alt={p.alt_description}
                className="w-full h-40 object-cover rounded-md"
              />
              <div className="p-2 text-sm">
                <p className="font-medium">{p.user.name}</p>
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => fetchPhotoById(p.id)}
                    className="text-indigo-600 hover:underline text-xs"
                  >
                    Details
                  </button>
                  <button
                    onClick={() => fetchPhotoStats(p.id)}
                    className="text-green-600 hover:underline text-xs"
                  >
                    Stats
                  </button>
                  <button
                    onClick={() => downloadPhoto(p.id)}
                    className="text-blue-600 hover:underline text-xs"
                  >
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Photo details */}
      {photo && (
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="font-medium mb-2">📷 Photo Details</h3>
          <p>
            <strong>ID:</strong> {photo.id}
          </p>
          <p>
            <strong>Author:</strong> {photo.user.name}
          </p>
          <img
            src={photo.urls.small}
            alt={photo.alt_description}
            className="rounded-lg mt-3"
          />
        </div>
      )}

      {/* Photo statistics */}
      {stats && (
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="font-medium mb-2">📊 Photo Statistics</h3>
          <p>Views: {stats.views.total.toLocaleString()}</p>
          <p>Downloads: {stats.downloads.total.toLocaleString()}</p>
          <p>Likes: {stats.likes.total.toLocaleString()}</p>
        </div>
      )}
    </div>
  );
}
