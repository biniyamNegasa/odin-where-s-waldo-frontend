import { useContext, useState, useEffect } from "react";
import { NameContext } from "../providers/NameProvider";
import { useRef } from "react";

function UsernameForm() {
  const { setUsername } = useContext(NameContext);
  const [inputField, setInputField] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const dialogRef = useRef(null);

  const usernameRegex = /^[a-zA-Z][a-zA-Z0-9]{2,}$/;

  useEffect(() => {
    const openDialog = () => {
      dialogRef.current.showModal();
    };
    openDialog();
  }, []);

  const handleClick = () => {
    if (!usernameRegex.test(inputField)) {
      setErrorMsg(
        "Username must be at least 3 characters, start with a letter, and contain only letters or numbers."
      );
      return;
    }
    setErrorMsg("");
    dialogRef.current.close();
    setUsername(inputField);
  };

  return (
    <dialog ref={dialogRef}>
      <h1>Username</h1>
      <input
        type="text"
        value={inputField}
        onChange={(e) => {
          setInputField(e.target.value);
        }}
        placeholder="Enter your username"
      />
      {errorMsg && <div className="error-message">{errorMsg}</div>}
      <button onClick={handleClick}>Submit</button>
    </dialog>
  );
}

export default UsernameForm;
