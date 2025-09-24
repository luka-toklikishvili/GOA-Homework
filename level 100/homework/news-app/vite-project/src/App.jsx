import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Sports from "./pages/sports";
import Tech from "./pages/Tech";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/tech" element={<Tech />} />
      </Routes>
    </Router>
  );
}

export default App;