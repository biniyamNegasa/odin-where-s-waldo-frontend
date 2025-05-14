function ChoiceBox({ ref, popover, choices, handleChange }) {
  return (
    <div
      ref={ref}
      className="ChoiceBox"
      style={{
        position: "absolute",
        left: `${popover.x}px`,
        top: `${popover.y}px`,
        backgroundColor: "#222",
        color: "#fff",
        padding: "1rem",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.13)",
        zIndex: 10,
        minWidth: "120px",
      }}
    >
      <select
        id="person-choice"
        onChange={handleChange}
        style={{
          width: "100%",
          fontSize: "1rem",
          padding: "0.4rem 1rem",
          borderRadius: "6px",
          border: "1px solid #bfc9d9",
        }}
      >
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
