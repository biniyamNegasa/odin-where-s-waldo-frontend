import { Link, useLocation } from "react-router-dom";

function Card({ id, title, url }) {
  const { pathname } = useLocation();
  let path = "play";
  if (pathname.includes("leaderboard")) {
    path = "leaderboard";
  }

  return (
    <div className="card">
      <Link to={`/${path}/${id}`}>
        <img src={url} alt={title} />
        <div>
          <h2>{title}</h2>
        </div>
      </Link>
    </div>
  );
}

export default Card;
