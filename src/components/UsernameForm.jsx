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
    <dialog ref={dialogRef}>
      <h1>Username</h1>
      <input
        type="text"
        value={inputField}
        onChange={(e) => setInputField(e.target.value)}
      />
      <button
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
