import Card from "./Card.jsx";
import { gameImages } from "../data";

function Cards() {
  return (
    <div className="cards">
      {gameImages.map((image) => (
        <Card key={image.id} {...image} />
      ))}
    </div>
  );
}

export default Cards;
