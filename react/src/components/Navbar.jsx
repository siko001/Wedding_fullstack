import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Container = styled.div`
	width: 100%;
	height: 100px;
	display: flex;
	justify-content: center;
	top: 0;
	background-color: #fff;
	position: sticky;
	z-index: 999;
`;
const NavbarContainer = styled.div`
	padding: 0 1rem;
	width: 75%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Logo = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
	font-weight: 600;
`;

const Img = styled.img`
	height: 100%;
`;

const Menu = styled.div`
	ul {
		display: flex;
		list-style: none;
		gap: 1.5rem;
		opacity: 0.7;
	}

	li:hover {
		cursor: pointer;
		color: #396caf;
	}
`;

const DesktopMenu = styled.div`
	display: none;
	@media screen and (min-width: 860px) {
		display: block;
	}
`;

const MobileMenu = styled.div`
	@media screen and (min-width: 860px) {
		display: none;
	}
`;

const MobileOverLay = styled.div`
	display: block;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.9);
	z-index: 999;
	color: #fff;

	.mobile-body {
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		width: 75%;
		justify-content: space-evenly;
		height: 100%;
	}

	.header {
		display: flex;
		justify-content: space-between;
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: 50px;
		list-style: none;
		align-items: center;
	}

	.footer {
		display: flex;

		justify-content: center;
	}
`;

const Navbar = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const handleOpenMobileMenu = () => {
		setMobileMenuOpen((prevState) => !prevState);
	};

	const handleCloseMobileMenu = () => {
		setMobileMenuOpen((prevState) => !prevState);
	};

	return (
		<>
			{mobileMenuOpen && (
				<MobileOverLay>
					<div className="mobile-body">
						<div>
							<ul>
								<li>
									<Link to="/">Home</Link>
								</li>
								<li>
									<Link to="/location">Location</Link>
								</li>
								<li>
									<Link to="/rsvp">RSVP</Link>
								</li>
								<li>
									<Link to="/menu">Menu</Link>
								</li>
								<li>
									<Link to="/schedule">Schedule</Link>
								</li>
							</ul>
						</div>
						<div className="footer">
							<p className="styled-font">
								Powered By
								<a href="https://neilmallia.com">
									<span className="red"> Neil</span>
								</a>
							</p>
						</div>
					</div>
				</MobileOverLay>
			)}
			<Container>
				<NavbarContainer>
					<Logo className="styled-font primary-color">Karina and Neil</Logo>
					<Menu className="normal-font">
						<DesktopMenu>
							<ul>
								<li>
									<Link to="/">Home</Link>
								</li>
								<li>
									<Link to="/location">Location</Link>
								</li>
								<li>
									<Link to="/rsvp">RSVP</Link>
								</li>
								<li>
									<Link to="/menu">Menu</Link>
								</li>
								<li>
									<Link to="/schedule">Schedule</Link>
								</li>
							</ul>
						</DesktopMenu>
						<MobileMenu>
							<FontAwesomeIcon className="mobile-menu" icon={faBars} onClick={handleOpenMobileMenu} />
						</MobileMenu>
					</Menu>
				</NavbarContainer>
			</Container>
		</>
	);
};

export default Navbar;
