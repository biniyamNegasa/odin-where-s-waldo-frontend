import { Outlet } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import "./App.css";

function App() {
  return (
    <>
      <h1> Where is Waldo? </h1>
      <Layout />
      <Outlet />
    </>
  );
}

export default App;
