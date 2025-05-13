function ChoiceBox({ ref, popover, choices, handleChange }) {
  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        left: `${popover.x}px`,
        top: `${popover.y}px`,
        backgroundColor: "black",
        color: "white",
      }}
    >
      <select id="person-choice" onChange={handleChange}>
        <option value="">Select</option>
        {choices.map((choice) => (
          <option key={choice.id} value={choice.title.toLowerCase()}>
            {choice.title}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ChoiceBox;
