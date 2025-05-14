import React, { useRef, useState, useContext, useEffect } from "react";
import { gameImages, characterImages } from "../data";
import { Link, useParams } from "react-router-dom";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Error from "./Error";
import ChoiceBox from "./ChoiceBox";
import { NameContext } from "../providers/NameProvider";
import UsernameForm from "./UsernameForm";
import usePostTimer from "../hooks/usePostTimer";
import useGetCheck from "../hooks/useGetCheck";
import usePatchTimer from "../hooks/usePatchTimer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Play() {
  const { username } = useContext(NameContext);
  const [selectedCharacter, setSelectedCharacter] = useState("");
  const imgRef = useRef(null);
  const containerRef = useRef(null);
  const { id } = useParams();
  const [popover, setPopover] = useState({ x: 0, y: 0, isOpen: false });
  const [choices, setChoices] = useState(characterImages);
  const [foundCharacters, setFoundCharacters] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [finalTime, setFinalTime] = useState(null);
  const [clickPercent, setClickPercent] = useState({ x: null, y: null });
  const [foundMarkers, setFoundMarkers] = useState([]); // {x, y, character}
  const [shouldPatch, setShouldPatch] = useState(false);

  const currentImage = gameImages.find((image) => image.id == id);
  const { timer, loading, error } = usePostTimer(
    username,
    currentImage?.name || ""
  );
  const { id: gameSessionId } = timer || {};
  const { check } = useGetCheck(
    currentImage?.name,
    selectedCharacter,
    clickPercent.x,
    clickPercent.y
  );

  // Only patch timer when game is over and session exists
  const { timer: patchedTimer } = usePatchTimer(
    shouldPatch && gameSessionId ? gameSessionId : null
  );

  const handleChangeOnChoiceBox = (e) => {
    if (e.target.value.trim() !== "") {
      setSelectedCharacter(e.target.value);
      setPopover({ ...popover, isOpen: false });
    }
  };

  const handleClick = (e) => {
    if (!imgRef.current || !containerRef.current) {
      return;
    }
    const imgRect = imgRef.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - imgRect.left;
    const y = e.clientY - imgRect.top;
    // Calculate percent coordinates relative to image size
    const percentX = (x / imgRect.width) * 100;
    const percentY = (y / imgRect.height) * 100;
    setClickPercent({ x: percentX, y: percentY });
    // Position popover relative to container
    setPopover({
      x: e.clientX - containerRect.left,
      y: e.clientY - containerRect.top,
      isOpen: true,
    });
  };

  useEffect(() => {
    if (check && selectedCharacter) {
      if (check.found) {
        toast.success(`Correct! You found ${selectedCharacter}.`, {
          position: "top-center",
          autoClose: 1500,
        });
        setFoundMarkers((prev) => [
          ...prev,
          {
            x: clickPercent.x,
            y: clickPercent.y,
            character: selectedCharacter,
          },
        ]);
        setFoundCharacters((prev) => [...prev, selectedCharacter]);
        setChoices((prev) =>
          prev.filter((c) => c.title.toLowerCase() !== selectedCharacter)
        );
        setPopover({ x: 0, y: 0, isOpen: false }); // Close popover after correct
      } else {
        toast.error("Incorrect, try again!", {
          position: "top-center",
          autoClose: 1500,
        });
        setPopover((prev) => ({ ...prev, isOpen: false })); // Close popover after incorrect
      }
      setSelectedCharacter("");
    }
  }, [check, selectedCharacter, clickPercent.x, clickPercent.y]);

  // When all characters are found, set gameOver and trigger patch
  useEffect(() => {
    if (foundCharacters.length === characterImages.length && !gameOver) {
      setGameOver(true);
      setShouldPatch(true);
    }
  }, [foundCharacters, gameOver]);

  // When patchedTimer is updated, set the final time
  useEffect(() => {
    if (patchedTimer && patchedTimer.time_taken) {
      setFinalTime(patchedTimer.time_taken);
      setShouldPatch(false); // Reset so PATCH doesn't repeat
    }
  }, [patchedTimer]);

  if (username.trim() === "") {
    return <UsernameForm />;
  }

  if (!currentImage) {
    return <Error />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error has occured!</div>;
  }

  if (gameOver) {
    return (
      <div className="gameover-container">
        <h1>Congratulations! You found all characters!</h1>
        <p>
          Your time: {finalTime !== null ? `${finalTime} seconds` : "Saving..."}
        </p>
        <Link to={`/leaderboard/${currentImage.id}`}>View Leaderboard</Link>
      </div>
    );
  }

  return (
    <div>
      <ToastContainer />
      <h1>Play {currentImage.title}</h1>
      <div>
        <div className="par-character-container">
          <p>Find these characters: </p>
          <div className="character-container">
            {characterImages.map((image) => (
              <div
                key={image.id}
                style={{
                  opacity: foundCharacters.includes(image.title.toLowerCase())
                    ? 0.3
                    : 1,
                }}
              >
                <img src={image.url} alt={image.title} />
                <p>{image.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div
          className="play-img-container"
          style={{ position: "relative" }}
          ref={containerRef}
        >
          <TransformWrapper
            initialScale={1}
            onPinchStart={() => setPopover({ ...popover, isOpen: false })}
            onZoomStart={() => setPopover({ ...popover, isOpen: false })}
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
              {/* Markers for found characters */}
              {foundMarkers.map((marker, idx) => (
                <div
                  key={idx}
                  style={{
                    position: "absolute",
                    left: `${marker.x}%`,
                    top: `${marker.y}%`,
                    transform: "translate(-50%, -50%)",
                    background: "#0a7d2c",
                    color: "#fff",
                    borderRadius: "50%",
                    width: 28,
                    height: 28,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: 16,
                    border: "2px solid #fff",
                    zIndex: 20,
                    pointerEvents: "none",
                  }}
                  title={marker.character}
                >
                  ✓
                </div>
              ))}
            </TransformComponent>
          </TransformWrapper>
          {popover.isOpen && (
            <ChoiceBox
              popover={popover}
              choices={choices}
              handleChange={handleChangeOnChoiceBox}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Play;
