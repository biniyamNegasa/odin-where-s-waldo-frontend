import { useContext } from "react";
import { NameContext } from "../providers/NameProvider";
import UsernameForm from "./UsernameForm";

function Home() {
  const { username } = useContext(NameContext);
  if (username.trim() === "") {
    return <UsernameForm />;
  }

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
