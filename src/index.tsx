import React from "react";
import ReactDOMClient from "react-dom/client";
import { HttpsWwwAppleCom } from "./screens/HttpsWwwAppleCom";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<HttpsWwwAppleCom />);
