import React, { useRef, useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { MeshBasicMaterial } from 'three';

export default function Model(props) {
	const { nodes, materials } = useGLTF('./models/error-scene-transformed.glb');
	const redMaterial = new MeshBasicMaterial({ color: 0xff0000 });

	const [scale, setScale] = useState([1, 1, 1]);

	// Adjust scale on screen resize
	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth;
			const height = window.innerHeight;

			// You can adjust these values as needed to control scaling behavior
			let scaleFactor = Math.min(width / 800, height / 600);

			// Adjust the scale for mobile devices
			if (width < 768) {
				scaleFactor *= 1.5; // Increase the scale for smaller screens
			}

			setScale([0.122 * scaleFactor, 0.106 * scaleFactor, 0.11]);
		};

		handleResize(); // Call it initially
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<group {...props} dispose={null}>
			<mesh geometry={nodes.typeMesh1_typeBlinn_0.geometry} material={(materials.typeBlinn, redMaterial)} scale={scale} />
		</group>
	);
}

useGLTF.preload('./models/error-scene-transformed.glb');
