import { Link } from "react-router-dom";

function Layout() {
  return (
    <nav className="layout">
      <div>
        <Link className="nav-link" to="/home">
          Home
        </Link>
        <Link className="nav-link" to="/leaderboard">
          Leaderboard
        </Link>
      </div>
    </nav>
  );
}

export default Layout;
