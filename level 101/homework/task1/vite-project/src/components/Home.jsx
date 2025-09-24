import { Outlet, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <Link to="create">Go to Create</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Home;
