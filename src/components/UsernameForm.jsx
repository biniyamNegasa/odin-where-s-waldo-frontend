import { useContext, useState, useEffect } from "react";
import { NameContext } from "../providers/NameProvider";
import { useRef } from "react";

function UsernameForm() {
  const { setUsername } = useContext(NameContext);
  const [inputField, setInputField] = useState("");
  const dialogRef = useRef(null);

  useEffect(() => {
    const openDialog = () => {
      dialogRef.current.showModal();
    };
    openDialog();
  }, []);

  return (
    <dialog
      ref={dialogRef}
      style={{
        minWidth: "320px",
        border: "none",
        borderRadius: "12px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
        padding: "2rem 2.5rem",
        background: "#fff",
        textAlign: "center",
      }}
    >
      <h1>Username</h1>
      <input
        type="text"
        value={inputField}
        onChange={(e) => setInputField(e.target.value)}
        style={{
          fontSize: "1.1rem",
          padding: "0.5rem 1rem",
          borderRadius: "6px",
          border: "1px solid #bfc9d9",
          margin: "1rem 0",
        }}
      />
      <button
        style={{
          fontSize: "1rem",
          padding: "0.5rem 1.5rem",
          borderRadius: "6px",
          border: "none",
          background: "#2d3a4b",
          color: "#fff",
          cursor: "pointer",
          transition: "background 0.2s",
        }}
        onClick={() => {
          dialogRef.current.close();
          setUsername(inputField);
        }}
      >
        Submit
      </button>
    </dialog>
  );
}

export default UsernameForm;
