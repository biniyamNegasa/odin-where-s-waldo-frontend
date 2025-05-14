import { useEffect, useState } from "react";
import { BASE_URL, gameImages } from "../data";
import { Link } from "react-router-dom";

function Leaderboard() {
  const [topScores, setTopScores] = useState([]);
  useEffect(() => {
    async function fetchAllLeaderboards() {
      const results = await Promise.all(
        gameImages.map(async (image) => {
          const response = await fetch(
            `${BASE_URL}/api/leaderboard/${image.name}`
          );
          const data = await response.json();
          const top = data && data.length > 0 ? data[0] : null;
          return { ...image, top };
        })
      );
      setTopScores(results);
    }
    fetchAllLeaderboards();
  }, []);

  return (
    <div className="leaderboard-page">
      <h1>Leaderboard</h1>
      <table>
        <thead>
          <tr>
            <th>Theme</th>
            <th>Top Player</th>
            <th>Best Time</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {topScores.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.top ? item.top.name : "-"}</td>
              <td>{item.top ? `${item.top.time_taken} seconds` : "-"}</td>
              <td>
                <Link className="btn" to={`/leaderboard/${item.id}`}>
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
