import { gameImages } from "../data";
import { useParams } from "react-router-dom";
import Error from "./Error";

function Play() {
  const { id } = useParams();
  if (!gameImages.find((image) => image.id == id)) {
    return <Error />;
  }
  return (
    <div>
      <h1>Play</h1>
    </div>
  );
}

export default Play;
