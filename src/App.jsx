import { Outlet } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Cards from "./components/Cards";
import "./App.css";

function App() {
  return (
    <>
      <Layout />
      <h1> Where is Waldo? </h1>
      <Outlet />
      <Cards />
    </>
  );
}

export default App;
