import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";

/**
 *
 * scene, renderer, camera ...
 */
function Setting() {
  const { scene } = useThree();
  useEffect(() => {
    scene.background = new THREE.Color("#34495e");
  }, []);
  return null;
}

export default Setting;
