import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { MeshBasicMaterial } from 'three'; // Import the MeshBasicMaterial

export default function Model(props) {
  
	const { nodes, materials } = useGLTF('./models/scene-transformed.glb');

	// Create a red material with increased linewidth
	const redMaterial = new MeshBasicMaterial({ color: 0xff0000, linewidth: 12 }); // Adjust linewidth as needed

	return (
		<group {...props} dispose={null}>
			<mesh geometry={nodes.Cube.geometry} material={redMaterial} rotation={[-Math.PI / 2, 0, 0]} scale={2.608} />
		</group>
	);
}

useGLTF.preload('./models/scene-transformed.glb');
