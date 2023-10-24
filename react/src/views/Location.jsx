import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import styled from 'styled-components';
import Timer from '../components/Timer';

const Conatiner = styled.div``;

const Heading = styled.div`
	width: 75%;
	margin: 50px auto;
	display: flex;
	justify-content: center;
	text-align: center;
	h2 {
		font-size: 3rem;
	}
`;

const CardsContainer = styled.div`
	display: flex;
	width: 75%;
	flex-wrap: wrap;
	gap: 30px;
	margin: 0 auto;
	padding: 0 0 50px;
	@media screen and (max-width: 1000px) {
		flex-direction: column;
		align-items: center;
		width: 100%;
	}
`;

const Location = () => {
	const cardData = [
		{ image: '.jpg', title: 'wedding Cerimony' },
		{ image: '.jpg', title: 'wedding Cerimony' },
	];
	return (
		<div>
			<Navbar />
			<Conatiner>
				<Heading>
					<h2 className="styled-font primary-color">When and Where</h2>
				</Heading>

				<CardsContainer>
					{cardData.map((data, index) => (
						<Card key={index} {...data} />
					))}
				</CardsContainer>
			</Conatiner>
			<Timer />
			<Footer />
		</div>
	);
};

export default Location;
