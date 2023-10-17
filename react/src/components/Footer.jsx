import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Section = styled.section``;
const Container = styled.div`
	display: flex;
	height: 300px;
	justify-content: center;
	align-items: center;
	color: white;
	text-align: center;

	h3 {
		font-size: 4rem;
	}
`;

const Footer = () => {
	return (
		<Section>
			<Container>
				<div>
					<h3 className="styled-font">Karina & Neil</h3>
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<p>
						Made with <FontAwesomeIcon icon={faHeart} /> By <a href="https://neilmallia.com">Neil Mallia</a>
					</p>
				</div>
			</Container>
		</Section>
	);
};

export default Footer;
