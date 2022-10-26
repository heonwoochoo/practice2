import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import * as THREE from "three";
import styled from "styled-components";
import Setting from "./Setting";
import Ground from "./components/Ground";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <Container>
      <Canvas style={{ width: "100%", height: "100%" }}>
        <Setting />
        <ambientLight intensity={2} />
        <OrbitControls />
        <primitive object={new THREE.AxesHelper(5)} />
        <Ground />
        <mesh position={[1, 0, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshPhongMaterial color="green" />
        </mesh>
      </Canvas>
    </Container>
  );
}

export default App;
