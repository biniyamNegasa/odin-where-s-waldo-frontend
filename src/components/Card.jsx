import { Link, useLocation } from "react-router-dom";

function Card({ id, title, url }) {
  const { pathname } = useLocation();
  let path = "play";
  if (pathname.includes("leaderboard")) {
    path = "leaderboard";
  }

  return (
    <div className="card">
      <Link
        to={`/${path}/${id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <img
          src={url}
          alt={title}
          width={200}
          height={200}
          style={{ borderRadius: "10px 10px 0 0", objectFit: "cover" }}
        />
        <h2>{title}</h2>
      </Link>
    </div>
  );
}

export default Card;
