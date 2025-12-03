import { useState } from "react";

export default function App() {
  const [city, setCity] = useState("Tbilisi");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "2fb965e2bd7ee6d4cbd99f8fbc066f49"

  async function getWeather() {
    try {
      setLoading(true);
      setError("");
      setWeather(null);

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=en`;

      const res = await fetch(url);
      if (!res.ok) throw new Error("City not found");

      const data = await res.json();

      setWeather({
        name: data.name,
        temp: Math.round(data.main.temp),
        desc: data.weather[0].description,
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={styles.container}>
      <h1>☀ Weather App</h1>

      <input
        style={styles.input}
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter a city..."
      />

      <button style={styles.button} onClick={getWeather}>
        Get Weather
      </button>

      {/* Loading */}
      {loading && <p>Loading...</p>}

      {/* Error */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Weather Info */}
      {weather && (
        <div style={styles.card}>
          <h2>{weather.name}</h2>
          <p>🌡 Temperature: {weather.temp}°C</p>
          <p>📄 Description: {weather.desc}</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "sans-serif",
    padding: "40px",
    maxWidth: "400px",
    margin: "0 auto",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginBottom: "10px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "8px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
  },
  card: {
    marginTop: "20px",
    padding: "20px",
    borderRadius: "12px",
    background: "#f3f4f6",
  },
};

