import React from 'react';
import { Parallax } from 'react-parallax';
import Us from '/images/us.jpg';
import styled from 'styled-components';

const Container = styled.div`
	overflow: hidden;
	display: flex;
`;

const Text = styled.div`
	position: relative;
	z-index: 1;
	color: #fff;
	text-align: center;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	.title {
		font-size: 3rem;
	}
	.bigger {
		font-size: 4.5rem;
	}
	.date {
		font-size: 2rem;
		letter-spacing: 4px;
	}

	hr {
		width: 50%;
	}
`;

const Image = () => {
	return (
		<Container>
			<Parallax className="parallax-box" strength={500} bgImage={Us}>
				<Text>
					<p className="styled-font bigger"> Karina & Neil's</p>
					<p className="styled-font title "> Wedding </p>
					<br />
					<hr />
					<p className=" date">15.06.2024 </p>
					<hr />
				</Text>
			</Parallax>
		</Container>
	);
};

export default Image;
