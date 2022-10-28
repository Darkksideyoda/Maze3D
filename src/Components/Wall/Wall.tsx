/* eslint-disable react/no-unknown-property */
import { useTexture } from "@react-three/drei";
import React from "react";
import { WallProps } from "../../Types/WallProps";

function Wall(props: WallProps) {
  const { wallPosition, wallTextureUri, wallMeasures } = props;
  const wallTexture = useTexture(wallTextureUri);
  return (
    <mesh position={wallPosition}>
      <boxGeometry args={wallMeasures} />
      <meshStandardMaterial map={wallTexture} />
    </mesh>
  );
}

export default Wall;
