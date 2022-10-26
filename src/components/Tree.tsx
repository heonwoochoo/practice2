import * as THREE from "three";
import {} from "@react-three/fiber";
import { useCallback, useEffect, useMemo } from "react";

function Tree(props: JSX.IntrinsicElements["group"]) {
  const partWidth = 3;
  const partHeight = 12;
  const levels = 7;
  const meshes: THREE.Mesh[] = [];
  const geometry = useMemo(
    () =>
      new THREE.CylinderGeometry(partWidth * 0.65, partWidth, partHeight, 8),
    []
  );
  const material = useMemo(
    () => new THREE.MeshPhongMaterial({ color: "#a04500" }),
    []
  );
  const baseMesh = useMemo(() => new THREE.Mesh(geometry, material), []);
  meshes.push(baseMesh);
  const makeBranch = useCallback(
    (level: number, matrix: THREE.Matrix4, color: THREE.Color) => {
      if (level === 0) return;
      const tempMatrix = new THREE.Matrix4();

      // type 1
      const newColor1 = color.clone();
      newColor1.g += 0.7 / levels;
      const material1 = new THREE.MeshPhongMaterial({ color: newColor1 });
      const mesh1 = new THREE.Mesh(geometry, material1);

      // 단위행렬 생성
      const newMatrix1 = new THREE.Matrix4();
      newMatrix1
        .multiply(tempMatrix.makeRotationY(Math.PI * 0.5))
        .multiply(tempMatrix.makeTranslation(-partWidth / 2, 0, 0))
        .multiply(tempMatrix.makeRotationZ(-Math.PI / 4))
        .multiply(tempMatrix.makeScale(0.75, 0.75, 0.75))
        .multiply(tempMatrix.makeTranslation(0, partHeight, 0));

      mesh1.matrix.copy(newMatrix1.multiply(matrix));
      mesh1.matrixAutoUpdate = false;
      meshes.push(mesh1);

      makeBranch(level - 1, newMatrix1, newColor1);

      // type 2
      const newColor2 = color.clone();
      newColor2.g += 0.7 / levels;
      const material2 = new THREE.MeshPhongMaterial({ color: newColor1 });
      const mesh2 = new THREE.Mesh(geometry, material2);

      // 단위행렬 생성
      const newMatrix2 = new THREE.Matrix4();
      newMatrix2
        .multiply(tempMatrix.makeRotationY(Math.PI * 0.5))
        .multiply(tempMatrix.makeTranslation(partWidth / 2, 0, 0))
        .multiply(tempMatrix.makeRotationZ(Math.PI / 4))
        .multiply(tempMatrix.makeScale(0.75, 0.75, 0.75))
        .multiply(tempMatrix.makeTranslation(0, partHeight, 0));

      mesh2.matrix.copy(newMatrix2.multiply(matrix));
      mesh2.matrixAutoUpdate = false;
      meshes.push(mesh2);

      makeBranch(level - 1, newMatrix2, newColor2);
    },
    []
  );
  makeBranch(levels, baseMesh.matrix, material.color);

  console.log(meshes);
  return (
    <group position={[0, partHeight * 0.5, 0]} {...props}>
      {meshes.map((mesh) => (
        <primitive key={mesh.uuid} object={mesh} />
      ))}
    </group>
  );
}

export default Tree;
