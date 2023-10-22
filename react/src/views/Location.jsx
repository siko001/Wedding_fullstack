import React from 'react';
import styled from 'styled-components';
import Invite from '../components/Invite';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

const Conatiner = styled.div``;

const Heading = styled.div`
	width: 50%;
	margin: 50px auto;
	display: flex;
	justify-content: center;
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
	}
`;

const Location = () => {
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
					<h2 className="styled-font primary-color">When and Where</h2>
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

export default Location;
