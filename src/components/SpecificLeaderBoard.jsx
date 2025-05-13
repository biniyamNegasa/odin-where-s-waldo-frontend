import { useParams } from "react-router-dom";
import { gameImages, gameData } from "../data";
import useGetLeaderboard from "../hooks/useGetLeaderboard";
import Error from "./Error";

function SpecificLeaderBoard() {
  const { id } = useParams();
  const currentImage = gameImages.find((image) => image.id == id);
  if (!currentImage) {
    return <Error />;
  }
  const { leaderboard, loading, error } = useGetLeaderboard(currentImage.name);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <Error />;
  }
  console.log(leaderboard);
  return (
    <div>
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
          {gameData.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.username}</td>
              <td>{data.timeTaken}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SpecificLeaderBoard;
