import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Conatiner = styled.div`
	height: 90vh;
	display: flex;
	flex-direction: column;
	gap: 80px;
	justify-content: center;
	margin: 0 auto;

	.top {
		display: flex;
		justify-content: center;
		gap: 10px;
	}

	.us-container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: center;
		justify-content: center;
	}

	.photo {
		height: 200px;
		width: 200px;
		border: 1px solid black;
		border-radius: 50%;
		@media screen and (max-width: 750px) {
			height: 150px;
			width: 150px;
		}
	}
	.name {
		font-size: 3rem;
		text-align: center;
		white-space: nowrap;
		font-weight: 600;
		@media screen and (max-width: 750px) {
			font-size: 2rem;
			white-space: wrap;
		}
	}
	.heart {
		font-size: 5rem;
		margin-top: 40px;
		margin-right: 40px;
		@media screen and (max-width: 750px) {
			font-size: 2.5rem;
			margin-right: 10px;
		}
	}

	.bottom {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
		font-size: 2rem;
		@media screen and (max-width: 750px) {
			font-size: 1rem;
		}
	}
	@media screen and (max-width: 750px) {
		.bigger {
			font-size: 3rem;
		}
	}
`;

const Us = () => {
	return (
		<Conatiner>
			<div className="top">
				<div className="us-container">
					<div className="photo"></div>
					<div className="name styled-font primary-color">Karina Vrazhalska</div>
				</div>
				<FontAwesomeIcon className="primary-color heart" icon={faHeart} />
				<div className="us-container">
					<div className="photo"></div>
					<div className="name styled-font primary-color">Neil Mallia</div>
				</div>
			</div>
			<div className="bottom">
				<p className="styled-font primary-color bigger font-light">We Are Getting Married</p>
				<p className="normal-font lighter-font">
					on 15<span className="smaller">th</span> June 2024 — Valletta, Malta
				</p>
			</div>
		</Conatiner>
	);
};

export default Us;
