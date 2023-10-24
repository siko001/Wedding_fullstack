import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
	position: relative;
	display: block;
	top: 0;
`;

const NavLinks = styled.nav`
	display: flex;
	gap: 18px;
	align-items: center;
	height: 100%;
	text-align: center;
`;

const NavLink = styled(Link)`
	text-decoration: none;
	color: blue; // Define your link color
	font-size: 14px;
	&:hover {
		color: red;
	}
`;

const AdminNavbar = () => {
	return (
		<Container>
			<NavLinks className="normal-font">
				<NavLink to="/register">Register</NavLink>
				<NavLink to="/login">Login</NavLink>
				<NavLink to="/register-guest">Register Guest</NavLink>
				<NavLink to="/attending-guests">Attending Guests</NavLink>
			</NavLinks>
		</Container>
	);
};

export default AdminNavbar;
