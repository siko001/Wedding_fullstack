import React from 'react';
import styled, { keyframes } from 'styled-components';

const heartBeat = keyframes`
  0% { transform: scale(0.95) }
  5% { transform: scale(1.1) }
  39% { transform: scale(0.85) }
  45% { transform: scale(1) }
  60% { transform: scale(0.95) }
  100% { transform: scale(0.9) }
`;

const Conatiner = styled.div`
	z-index: 999;
	width: 100%;
	height: 100%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0;
	left: 0;
`;

const Text = styled.div`
	position: relative;
	top: 10px;
	left: 10px;
	color: #fff;
	font-size: 3rem;
	animation: ${heartBeat} 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
`;

const Loader = styled.div`
	position: relative;
	width: 40px;
	height: 60px;
	animation: ${heartBeat} 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);

	&:before,
	&:after {
		content: '';
		background: #ff3d00;
		width: 40px;
		height: 60px;
		border-radius: 50px 50px 0 0;
		position: absolute;
		left: 0;
		bottom: 0;
		transform: rotate(45deg);
		transform-origin: 50% 68%;
		box-shadow: 5px 4px 5px #0004 inset;
	}

	&:after {
		transform: rotate(-45deg);
	}
`;

const Spinner = () => {
	return (
		<Conatiner>
			<Loader />
			<Text className="styled-font">Loading...</Text>
		</Conatiner>
	);
};

export default Spinner;
