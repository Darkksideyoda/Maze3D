/* eslint-disable react/no-unknown-property */
import { useLoader } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";
import { TextureLoader } from "three";
import { PlaneProps } from "../../Types/PlaneProps";

function Plane(props: PlaneProps) {
  const { planePosition, planeTextureUri, planeMeasures } = props;
  //const wallTexture = useTexture(wallTextureUri);
  const planeTexture = useLoader(TextureLoader, planeTextureUri);
  if (planeTexture) {
    planeTexture.wrapS = planeTexture.wrapT = THREE.RepeatWrapping;
    planeTexture.repeat.set(30, 50);
    planeTexture.anisotropy = 16;
  }
  return (
    <mesh position={planePosition}>
      <boxGeometry args={planeMeasures} />
      <meshStandardMaterial map={planeTexture} />
    </mesh>
  );
}

export default Plane;
