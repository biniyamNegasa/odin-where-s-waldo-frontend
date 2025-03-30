import { gameImages, characterImages } from "../data";
import { useParams } from "react-router-dom";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Error from "./Error";
import ChoiceBox from "./ChoiceBox";
import { useRef, useState } from "react";

function Play() {
  const [scale, setScale] = useState(1);
  const imgRef = useRef(null);
  const { id } = useParams();
  const [popover, setPopover] = useState({ x: 0, y: 0, isOpen: false });
  const popoverRef = useRef(null);

  const currentImage = gameImages.find((image) => image.id == id);
  if (!currentImage) {
    return <Error />;
  }

  const handleTransformed = (_, state) => {
    setScale(state.scale);
  };

  const handleClick = (e) => {
    if (!imgRef.current) {
      return;
    }
    const imgRect = imgRef.current.getBoundingClientRect();

    const x = e.clientX - imgRect.left;
    const y = e.clientY - imgRect.top;

    const originalX = x / scale;
    const originalY = y / scale;

    setPopover({
      x: e.pageX,
      y: e.pageY,
      isOpen: !popover.isOpen,
    });
    console.log("original", originalX, originalY);
  };

  return (
    <div>
      <h1>Play {currentImage.title}</h1>
      <div>
        <div className="par-character-container">
          <p>Find this characters: </p>
          <div className="character-container">
            {characterImages.map((image) => (
              <div key={image.id}>
                <img src={image.url} alt={image.title} />
                <p>{image.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="play-img-container">
          <TransformWrapper
            initialScale={1}
            onTransformed={handleTransformed}
            doubleClick={{ disabled: true }}
          >
            <TransformComponent>
              <img
                ref={imgRef}
                src={currentImage.url}
                alt={currentImage.title}
                style={{ pointerEvents: "auto" }}
                onClick={handleClick}
              />
            </TransformComponent>
          </TransformWrapper>
          {popover.isOpen && <ChoiceBox ref={popoverRef} popover={popover} />}
        </div>
      </div>
    </div>
  );
}

export default Play;
