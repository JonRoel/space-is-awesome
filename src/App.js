import React from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/home-view";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
          
            <Home />
          {/* <Route component={Home} path="/" exact /> */}
      </div>
    </BrowserRouter>
  );
}
