import { Link } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/leaderboard">Leaderboard</Link>
    </div>
  );
}

export default Layout;
