import { Outlet } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Layout />
      <h1> Where is Waldo? </h1>
      <Outlet />
    </>
  );
}

export default App;
