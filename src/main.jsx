import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { route } from "./routes/route.jsx";
import NameProvider from "./providers/NameProvider.jsx";

const router = createBrowserRouter(route);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NameProvider>
      <RouterProvider router={router} />
    </NameProvider>
  </StrictMode>,
);
