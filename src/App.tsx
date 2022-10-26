import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import * as THREE from "three";
import styled from "styled-components";
import Setting from "./Setting";
import Ground from "./components/Ground";
import Tree from "./components/Tree";
import Controller from "./ui/Controller";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

function App() {
  const [treeLevel, setTreeLevel] = useState<number>(5);
  return (
    <Container>
      <Canvas style={{ width: "100%", height: "100%" }}>
        <Setting />
        <ambientLight intensity={0.3} />
        <directionalLight intensity={0.5} position={[-1, 2, 4]} />
        <OrbitControls />
        <primitive object={new THREE.AxesHelper(5)} />
        <Ground />
        <Tree userData={{ level: treeLevel }} />
      </Canvas>
      <Controller treeLevel={treeLevel} />
    </Container>
  );
}

export default App;
