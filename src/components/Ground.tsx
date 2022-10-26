import * as THREE from "three";
import {} from "@react-three/fiber";
import { useMemo } from "react";
function Ground(props: JSX.IntrinsicElements["group"]) {
  const geometry = useMemo(() => new THREE.PlaneGeometry(100, 100), []);
  const material = useMemo(
    () => new THREE.MeshPhongMaterial({ color: "#95a5a6" }),
    []
  );
  return (
    <group {...props} rotation={[-Math.PI / 2, 0, 0, "XYZ"]}>
      <mesh geometry={geometry} material={material} />
    </group>
  );
}

export default Ground;
