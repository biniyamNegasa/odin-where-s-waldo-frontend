import { useParams } from "react-router-dom";
import { gameImages } from "../data";
import useGetLeaderboard from "../hooks/useGetLeaderboard";
import Error from "./Error";

function SpecificLeaderBoard() {
  const { id } = useParams();
  const currentImage = gameImages.find((image) => image.id == id);
  const { leaderboard, loading, error } = useGetLeaderboard(currentImage?.name);
  if (!currentImage) {
    return <Error />;
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <Error />;
  }
  return (
    <div className="leaderboard-page">
      <h1>{currentImage.title} Leaderboard</h1>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>Time Taken</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.name}</td>
              <td>{data.time_taken} seconds</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SpecificLeaderBoard;
