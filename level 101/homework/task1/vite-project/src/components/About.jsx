import { Outlet, Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <nav>
        <Link to="create">Go to Create</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default About;
