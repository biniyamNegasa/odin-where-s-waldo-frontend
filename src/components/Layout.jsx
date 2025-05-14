import { Link } from "react-router-dom";

function Layout() {
  return (
    <nav className="layout">
      <div>
        <Link to="/home">Home</Link>
        <Link to="/leaderboard">Leaderboard</Link>
      </div>
    </nav>
  );
}

export default Layout;
