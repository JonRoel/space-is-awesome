import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/home-view";
import PhotoCard from "./components/photos";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
          <Route component={Home} path="/" exact />
          <Route component={PhotoCard} path="/photos" />
      </div>
    </BrowserRouter>
  );
}
