import { useContext } from "react";
import { NameContext } from "../providers/NameProvider";
import UsernameForm from "./UsernameForm";
import Cards from "./Cards";

function Home() {
  const { username } = useContext(NameContext);
  if (username.trim() === "") {
    return <UsernameForm />;
  }

  return (
    <div>
      <h1>Home</h1>
      <Cards />
    </div>
  );
}

export default Home;
