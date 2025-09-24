import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import HomeCreate from "./components/HomeCreate";
import About from "./components/About";
import AboutCreate from "./components/AboutCreate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="create" element={<HomeCreate />} />
        </Route>

        <Route path="/about" element={<About />}>
          <Route path="create" element={<AboutCreate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

