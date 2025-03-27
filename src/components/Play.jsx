import { gameImages, characterImages } from "../data";
import { useParams } from "react-router-dom";
import Error from "./Error";

function Play() {
  const { id } = useParams();
  const currentImage = gameImages.find((image) => image.id == id);
  if (!currentImage) {
    return <Error />;
  }

  return (
    <div>
      <h1>Play {currentImage.title}</h1>
      <div>
        <p>Find this characters: </p>
        <div>
          {characterImages.map((image) => (
            <div key={image.id}>
              <img src={image.url} alt={image.title} />
              <p>{image.title}</p>
            </div>
          ))}
        </div>
        <img src={currentImage.url} alt={currentImage.title} />
      </div>
    </div>
  );
}

export default Play;
