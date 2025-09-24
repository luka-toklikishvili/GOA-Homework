import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Header = () => (
  <header style={{ padding: "10px", background: "#eee" }}>
    <nav>
      <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
      <Link to="/about">About</Link>
    </nav>
  </header>
);


const Footer = () => (
  <footer style={{ padding: "10px", background: "#eee", marginTop: "20px" }}>
    <p>© 2025 My React App</p>
  </footer>
);

const Home = () => (
  <main>
    <h1>Welcome to Home Page</h1>
    <p>This is the main content of the Home page.</p>
  </main>
);


const About = () => (
  <main>
    <h1>About Page</h1>
    <p>This is some information about our app.</p>
  </main>
);


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
