import React, { useEffect, useState } from "react";

export default function PhotoExplorer() {
  const ACCESS_KEY = "5gIvqYvkFgyFgy3BJOrpyGivKyl6WbkOpLY-nxaIT3M";
  const BASE_URL = "https://api.unsplash.com";

  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(false);

  //  take 10 images
  async function fetchPhotos() {
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/photos?per_page=10&client_id=${ACCESS_KEY}`);
      const data = await res.json();
      setPhotos(data);
    } catch (err) {
      console.error("Error fetching photos:", err);
    } finally {
      setLoading(false);
    }
  }

  // 🔍 image details
  async function fetchPhotoDetails(id) {
    try {
      const res = await fetch(`${BASE_URL}/photos/${id}?client_id=${ACCESS_KEY}`);
      const data = await res.json();
      setSelectedPhoto(data);
      fetchPhotoStats(id);
    } catch (err) {
      console.error("Error fetching photo details:", err);
    }
  }

  // image statistic
  async function fetchPhotoStats(id) {
    try {
      const res = await fetch(`${BASE_URL}/photos/${id}/statistics?client_id=${ACCESS_KEY}`);
      const data = await res.json();
      setStats(data);
    } catch (err) {
      console.error("Error fetching photo stats:", err);
    }
  }

  // rewrite
  async function downloadPhoto(id) {
    try {
      const res = await fetch(`${BASE_URL}/photos/${id}/download?client_id=${ACCESS_KEY}`);
      const data = await res.json();
      window.open(data.url, "_blank");
    } catch (err) {
      console.error("Error downloading photo:", err);
    }
  }

  // first download
  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6 text-indigo-700">📷 Photo Explorer</h1>

      {/* Loading */}
      {loading && <p className="text-gray-500">Loading photos...</p>}

      {/* Photos Grid */}
      {!selectedPhoto && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition cursor-pointer overflow-hidden"
              onClick={() => fetchPhotoDetails(photo.id)}
            >
              <img
                src={photo.urls.small}
                alt={photo.alt_description}
                className="w-full h-60 object-cover"
              />
              <div className="p-3">
                <p className="font-medium">{photo.user.name}</p>
                <p className="text-sm text-gray-500">{photo.likes} ❤️ Likes</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Selected Photo Details */}
      {selectedPhoto && (
        <div className="bg-white rounded-2xl shadow-lg p-6 max-w-lg w-full mt-6">
          <img
            src={selectedPhoto.urls.regular}
            alt={selectedPhoto.alt_description}
            className="w-full h-80 object-cover rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">
            {selectedPhoto.user.name}
          </h2>
          <p className="text-gray-600 mb-3">{selectedPhoto.description || "No description"}</p>

          {/* 📊 Statistics */}
          {stats && (
            <p className="text-gray-800 font-medium mb-2">
              👁️ Views: {stats.views.total.toLocaleString()}
            </p>
          )}

          {/* Buttons */}
          <div className="flex justify-between mt-4">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
            >
              🔙 Back
            </button>
            <button
              onClick={() => downloadPhoto(selectedPhoto.id)}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              ⬇️ Download
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

