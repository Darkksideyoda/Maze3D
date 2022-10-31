import { Sky, Stars, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import WallTexure from "/textures/wallTexture.jpg";
import PlanTexture from "/textures/groundTexture.jpg";
import Wall from "../Wall/Wall";
import Plane from "../Plane/Plane";
import "./Maze.css";
import { Generate2DArray } from "../../Engines/MazenEngine/MazeCreator";
function Maze() {
  const [heightState, setHeightState] = useState(3);

  const myArray = Generate2DArray(2);

  console.log(myArray.length);
  useEffect(() => {
    setHeightState(window.innerHeight);
    console.log("calistim Height");
  });

  return (
    <div>
      <Canvas style={{ height: `${heightState}px` }}>
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
        {/* <spotLight position={[50, 10, 10]} angle={0.15} penumbra={1} /> */}
        <OrbitControls />
        {/* <Wall
          wallPosition={[1, 51, 1]}
          wallTextureUri={WallTexure}
          wallMeasures={[500, 100, 10]}
        /> */}
        {Array.from({ length: myArray.length / 2 }).map((e, i) => (
          <Plane
            key={i}
            planeTextureUri={PlanTexture}
            planePosition={[i * 10, 1, i * 10]}
            planeMeasures={[10, 0.5, 10]}
          />
        ))}

        {Array.from({ length: myArray.length / 2 }).map((e, i) => (
          <Plane
            key={i}
            planeTextureUri={PlanTexture}
            planePosition={[1, 1, 1]}
            planeMeasures={[10, 0.5, 10]}
          />
        ))}
      </Canvas>
    </div>
  );
}

export default Maze;
