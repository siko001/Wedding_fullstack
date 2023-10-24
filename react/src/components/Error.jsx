import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import ErrorText from './ErrorScene';

import React from 'react';

const Error = () => {
	return (
		<div className="not_found_container">
			<div className="error_container">
				<Canvas>
					<ambientLight intensity={0.5} />
					<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow />
					<PerspectiveCamera makeDefault position={[0, 0, 5]} near={0.1} far={100} fov={75} />
					<ErrorText position={[0, -1, 0]} />
					<OrbitControls
						autoRotate
						enableRotate={false}
						enableDamping={false}
						enableZoom={false}
						dampingFactor={0.1}
						rotateSpeed={0.2}
					/>{' '}
					{/* Enable autorotation */}
				</Canvas>
			</div>
			<div className="page_not_found error">Page Not Found</div>
		</div>
	);
};

export default Error;
