import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { registerFonts } from "./lib/font";
import "./styles/global.css";

registerFonts();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
