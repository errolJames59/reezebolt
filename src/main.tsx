import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import SmoothScrolling from "./lib/SmoothScrolling.tsx";

createRoot(document.getElementById("root")!).render(
  <SmoothScrolling>
    <App />
  </SmoothScrolling>
);