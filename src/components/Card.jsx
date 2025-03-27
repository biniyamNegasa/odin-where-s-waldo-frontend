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
        <img src={url} alt={title} width={200} height={200} />
        <h2>{title}</h2>
      </Link>
    </div>
  );
}

export default Card;
