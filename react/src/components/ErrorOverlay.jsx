import React from 'react';
import styled from 'styled-components';

const Conatiner = styled.div`
	z-index: 999;
	width: 50%;
	height: 100%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 40px;
	align-items: center;
	justify-content: center;
	background-color: rgba(0, 0, 0, 0.9);
	position: fixed;
	top: 0;
	left: 25%;
	color: #fff;

	@media screen and (max-width: 850px) {
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
	}

	ul {
		list-style: none;
		text-align: center;
		font-size: 1.5rem;
	}
	.heading {
		display: flex;
		justify-content: space-between;
		align-items: center;
		text-align: center;

		h3 {
			font-size: 5rem;
		}
	}
	button {
		padding: 0.5rem 1rem;
		color: white;
		background-color: rgba(151, 9, 118, 0.73);
		border: none;
		width: 25%;
		font-size: 1.5rem;
	}
`;

const ErrorOverlay = ({ errors, onClose }) => {
	return (
		<Conatiner>
			<div className="heading">
				<h3 className="styled-font">Sorry but</h3>
			</div>
			<ul className="normal-font">
				{Object.keys(errors).map((key) => (
					<li className="errors" key={key}>
						{errors[key]}
					</li>
				))}
			</ul>
			<button onClick={onClose}>Close</button>
		</Conatiner>
	);
};

export default ErrorOverlay;
