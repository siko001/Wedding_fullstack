import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
	background-color: #fff;
	min-width: 45%;
	max-width: 45%;
	align-items: center;
	text-align: center;
	display: flex;
	flex-direction: column;
	gap: 30px;
	@media screen and (max-width: 1000px) {
		width: 100%;
	}

	.time {
		font-weight: 700;
	}

	.description {
		margin-bottom: 35px;
		padding: 0 30px;
	}
`;

const ImageContainer = styled.div`
	width: 100%;
	height: 400px;
	border: 1px solid black;
`;

const Card = ({ image, title, date, time, description }) => {
	return (
		<CardContainer>
			<ImageContainer>{image}</ImageContainer>

			<div>
				<h3 className="styled-font light-font">{title}</h3>
			</div>
			<div>
				<p className="lighter-font normal-font time">{(date, time)}</p>
			</div>
			<div className="normal-font light-font description">{description}</div>
		</CardContainer>
	);
};

export default Card;
