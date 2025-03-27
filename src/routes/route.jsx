import { Navigate } from "react-router-dom";
import App from "../App.jsx";
import Error from "../components/Error.jsx";
import Home from "../components/Home.jsx";
import Leaderboard from "../components/Leaderboard.jsx";

export const route = [
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/leaderboard",
        element: <Leaderboard />,
      },
    ],
  },
];
