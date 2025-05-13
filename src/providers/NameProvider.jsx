import { createContext, useState } from "react";

export const NameContext = createContext();

function NameProvider({ children }) {
  const [username, setUsername] = useState("");

  return (
    <NameContext.Provider value={{ username, setUsername }}>
      {children}
    </NameContext.Provider>
  );
}

export default NameProvider;
