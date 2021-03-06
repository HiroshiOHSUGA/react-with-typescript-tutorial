import { StrictMode } from "react";
// @ts-ignore @types/react-dom が v18に対応してない。
import * as ReactDOMClient from "react-dom/client";
import { App } from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
