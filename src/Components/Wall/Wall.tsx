/* eslint-disable react/no-unknown-property */
import { useLoader } from "@react-three/fiber";
import React from "react";
import { TextureLoader } from "three";
import * as THREE from "three";
import { WallProps } from "../../Types/WallProps";

function Wall(props: WallProps) {
  const { wallPosition, wallTextureUri, wallMeasures } = props;
  //const wallTexture = useTexture(wallTextureUri);
  const wallTexture = useLoader(TextureLoader, wallTextureUri);
  if (wallTexture) {
    wallTexture.wrapS = wallTexture.wrapT = THREE.RepeatWrapping;
    wallTexture.repeat.set(20, 2);
    wallTexture.anisotropy = 16;
  }
  return (
    <mesh position={wallPosition}>
      <boxGeometry args={wallMeasures} />
      <meshStandardMaterial map={wallTexture} />
    </mesh>
  );
}

export default Wall;
