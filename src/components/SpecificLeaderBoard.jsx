import { useParams } from "react-router-dom";
import { gameImages } from "../data";

function SpecificLeaderBoard() {
  const { id } = useParams();
  if (!gameImages.find((image) => image.id == id)) {
    return <Error />;
  }
  return (
    <div>
      <h1>Specific Leaderboard</h1>
    </div>
  );
}

export default SpecificLeaderBoard;
