import React, { useEffect, useState } from "react";

export default function ProductCatalog() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  // Fetch from Fake Store API
  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
      setFiltered(data);
    }
    fetchProducts();
  }, []);

  // Handle search & category filter
  useEffect(() => {
    let temp = [...products];

    if (category !== "all") {
      temp = temp.filter((p) => p.category === category);
    }

    if (search.trim() !== "") {
      temp = temp.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFiltered(temp);
  }, [search, category, products]);

  const categories = ["all", ...new Set(products.map((p) => p.category))];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">🛍️ Product Catalog</h2>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 min-w-[200px] border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.toUpperCase()}
            </option>
          ))}
        </select>
      </div>

      {/* Product grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden border border-gray-100"
          >
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-48 object-contain p-4 bg-gray-50"
            />
            <div className="p-4">
              <h3 className="text-sm font-medium text-gray-800 mb-2 truncate">
                {p.title}
              </h3>
              <p className="text-lg font-semibold text-indigo-600 mb-3">
                ${p.price}
              </p>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                {p.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-500 mt-10">No products found 😔</p>
      )}
    </div>
  );
}

