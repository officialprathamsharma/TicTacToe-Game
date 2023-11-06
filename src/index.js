import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import TicTacToe from "./components/TicTacToe";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <TicTacToe />
  </StrictMode>
);
