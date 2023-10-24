import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;
const FoodSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	margin-top: 50px;
	.title {
		font-size: 4rem;
		margin-bottom: 40px;
		@media screen and (max-width: 750px) {
			font-size: 3rem;
		}
	}

	.food-menus {
		display: flex;
		width: 100%;
		height: 600px;
		gap: 20px;
		@media screen and (max-width: 750px) {
			width: 80%;
			height: 1000px;
			flex-direction: column;
		}
	}

	.item {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		text-align: center;
		gap: 20px;
	}

	.item-menu {
		height: 100%;
		border: 1px solid black;
		width: 85%;
		margin: 0 auto;
		@media screen and (max-width: 750px) {
			width: 100%;
		}
	}

	button {
		padding: 1rem 1.5rem;
		width: 200px;
		margin: 0 auto;
		background-color: #396caf;
		border: 1px solid black;
		color: #ffffee;
		font-size: 1rem;
	}
`;

const DrinkSection = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 100px;
	margin-bottom: 100px;

	.title {
		text-align: center;
		font-size: 4rem;
		margin-bottom: 40px;
		@media screen and (max-width: 750px) {
			font-size: 3rem;
		}
	}

	.drinks-menus {
		display: flex;
		width: 100%;
		gap: 20px;
		@media screen and (max-width: 750px) {
			width: 100%;
			flex-direction: column;
		}
	}

	.item {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 500px;
		text-align: center;
		gap: 20px;
	}

	.item-menu {
		height: 100%;
		border: 1px solid black;
		width: 85%;
		margin: 0 auto;
		@media screen and (max-width: 750px) {
			width: 80%;
		}
	}

	button {
		padding: 1rem 1.5rem;
		width: 200px;
		margin: 0 auto;
		background-color: #396caf;
		border: 1px solid black;
		color: #ffffee;
		font-size: 1rem;
	}
`;

const Menus = () => {
	return (
		<div>
			<Navbar />
			<Container>
				<FoodSection className="styled-font">
					<div className="title primary-color">Food Menus</div>
					<div className="food-menus secondary-color">
						<div className="item">
							<div className="item-title">Normal Menu</div>
							<div className="item-menu"></div>
							<button>Download PDF</button>
						</div>
						<div className="item">
							<div className="item-title">Vegiterian Menu</div>
							<div className="item-menu"></div>
							<button>Download PDF</button>
						</div>
					</div>
				</FoodSection>

				<DrinkSection className="styled-font">
					<div className="title primary-color">Drinks Menus</div>
					<div className="drinks-menus secondary-color">
						<div className="item">
							<div className="item-title">Gin Menu</div>
							<div className="item-menu"></div>
							<button>Download PDF</button>
						</div>
						<div className="item">
							<div className="item-title">Cocktail Menu</div>
							<div className="item-menu"></div>
							<button>Download PDF</button>
						</div>
						<div className="item">
							<div className="item-title">Selection</div>
							<div className="item-menu"></div>
							<button>Download PDF</button>
						</div>
					</div>
				</DrinkSection>
			</Container>
			<Footer />
		</div>
	);
};

export default Menus;
