import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex gap-6">
      <Link to="/" className="font-bold">NewsSite</Link>
      <Link to="/">Home</Link>
      <Link to="/sports">Sports</Link>
      <Link to="/tech">Tech</Link>
    </nav>
  );
}