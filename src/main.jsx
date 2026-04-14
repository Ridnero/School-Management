import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./App.css";
import { StudentProvider } from "./context/StudentContext";
import { SidebarProvider } from "./context/SidebarContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StudentProvider>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </StudentProvider>
  </React.StrictMode>
);
