import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import Heart from './Heart';
import Hearth from './Scene2';

function ThreeScene() {
	// Define the default and phone scale
	const desktopScale = 0.5;
	const phoneScale = 20; // Adjust this scale as needed

	const [scale, setScale] = useState(desktopScale);

	useEffect(() => {
		// Function to handle window resize and adjust scale
		function handleResize() {
			if (window.innerWidth <= 768) {
				setScale(phoneScale); // If the screen width is less than or equal to 768px, use the phone scale
			} else {
				setScale(desktopScale); // Otherwise, use the default desktop scale
			}
		}

		// Initial scale setup
		handleResize();

		// Listen for window resize events
		window.addEventListener('resize', handleResize);

		return () => {
			// Remove the event listener when the component unmounts
			window.removeEventListener('resize', handleResize);
		};
	}, [phoneScale, desktopScale]);

	return (
		<Canvas>
			{/* <Heart scale={scale} /> */}
			<Hearth />
			<OrbitControls
				enableRotate={false} // Disable rotation
				enablePan={false} // Disable panning
				enableZoom={false} // Optionally, you can disable zooming as well
				autoRotate={true}
				autoRotateSpeed={10}
			/>
		</Canvas>
	);
}

export default ThreeScene;
