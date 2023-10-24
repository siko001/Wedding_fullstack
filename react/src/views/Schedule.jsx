import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import styled from 'styled-components';
const Conatiner = styled.div`
	width: 100%;
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

const Heading = styled.div`
	width: 50%;
	margin: 50px auto;
	display: flex;
	justify-content: center;
	h2 {
		font-size: 3rem;
	}
`;

const Schedule = () => {
	const cardData = [
		{ image: '.jpg', title: 'wedding Cerimony', time: '5pm', date: '15/06/24', description: 'bla bla bla' },
		{ image: '.jpg', title: 'wedding Cerimony', time: '5pm', date: '15/06/24', description: 'bla bla bla' },
		{ image: '.jpg', title: 'wedding Cerimony', time: '5pm', date: '15/06/24', description: 'bla bla bla' },
		{
			image: '.jpg',
			title: 'wedding Cerimony',
			time: '5pm',
			date: '15/06/24',
			description:
				'bla bla bla hello this is from the lorem ipsum bla bla bla :)ewufbwiubuowbf qu ubiuwbiub iuob uo bou bo uboub ufsfsdfd ad f sa f asfaff  rfwesdfdfd',
		},
	];
	return (
		<div>
			<Navbar />
			<Conatiner>
				<Heading>
					<h2 className="styled-font primary-color">Schedule</h2>
				</Heading>

				<CardsContainer>
					{cardData.map((data, index) => (
						<Card key={index} {...data} />
					))}
				</CardsContainer>
			</Conatiner>
			<Footer />
		</div>
	);
};

export default Schedule;
