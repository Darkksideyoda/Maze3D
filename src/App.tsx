import { Canvas } from "@react-three/fiber";
import React from "react";
import { OrbitControls, Sky, Stars } from "@react-three/drei";
import "./App.css";

import Maze from "./Components/Maze/Maze";

function App() {
  return (
    <div className="App">
      <Maze />
    </div>
  );
}

export default App;
