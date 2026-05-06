import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeContext } from "./context/ThemeContext.jsx";
import { EnquiryContext } from "./context/EnquiryContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeContext>
        <EnquiryContext>
          <App />
        </EnquiryContext>
      </ThemeContext>
    </BrowserRouter>
  </StrictMode>,
);
