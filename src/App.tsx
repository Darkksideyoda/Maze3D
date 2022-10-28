import { Canvas } from "@react-three/fiber";
import React from "react";
import { OrbitControls, Sky, Stars } from "@react-three/drei";
import "./App.css";
import Wall from "./Components/Wall/Wall";
import WallTexure from "/textures/wallTexture.jpg";

function App() {
  return (
    <div className="App" style={{ height: "800px" }}>
      <Canvas>
        <Sky
          distance={450000}
          sunPosition={[0, 0, 0]}
          inclination={0}
          azimuth={0.25}
        />
        <Stars
          radius={300}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={2}
        />
        <ambientLight intensity={0.5} />
        <spotLight position={[50, 10, 10]} angle={0.15} penumbra={1} />
        <OrbitControls />
        <Wall
          wallPosition={[1, 1, 1]}
          wallTextureUri={WallTexure}
          wallMeasures={[500, 100, 10]}
        />
      </Canvas>
    </div>
  );
}

export default App;
