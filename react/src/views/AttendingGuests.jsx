import React from 'react';
import styled from 'styled-components';
import AdminNavbar from '../components/AdminNavbar';

const Container = styled.div`
	padding-top: 105px;
	min-height: 100vh;
	max-width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background-color: #ffffee;
`;
const GuestContainer = styled.div`
	padding-top: 40px;
	background-color: #fff;
	justify-content: center;
	gap: 80px;
	text-align: center;
	display: flex;
	flex-wrap: wrap;
	@media screen and (max-width: 750px) {
		gap: 10px;
	}

	.guest {
		padding: 1rem 1.5rem;
		border: 1px solid rgba(0, 0, 0, 0.2);
	}
`;

const AttendingGuests = () => {
	return (
		<>
			<Container>
				<AdminNavbar />
				<br></br>
				Search
				<GuestContainer>
					<div className="guest">
						<p>Guest .id</p>
						<p>Name and Surname</p>
						<p>Email</p>
						<p>Confirmed: </p>
						<p>Attending: </p>
						<p>Table No: </p>
					</div>
					<div className="guest">
						<p>Guest .id</p>
						<p>Name and Surname</p>
						<p>Email</p>
						<p>Confirmed: </p>
						<p>Attending: </p>
						<p>Table No: </p>
					</div>
					<div className="guest">
						<p>Guest .id</p>
						<p>Name and Surname</p>
						<p>Email</p>
						<p>Confirmed: </p>
						<p>Attending: </p>
						<p>Table No: </p>
					</div>
					<div className="guest">
						<p>Guest .id</p>
						<p>Name and Surname</p>
						<p>Email</p>
						<p>Confirmed: </p>
						<p>Attending: </p>
						<p>Table No: </p>
					</div>
					<div className="guest">
						<p>Guest .id</p>
						<p>Name and Surname</p>
						<p>Email</p>
						<p>Confirmed: </p>
						<p>Attending: </p>
						<p>Table No: </p>
					</div>
					<div className="guest">
						<p>Guest .id</p>
						<p>Name and Surname</p>
						<p>Email</p>
						<p>Confirmed: </p>
						<p>Attending: </p>
						<p>Table No: </p>
					</div>{' '}
					<div className="guest">
						<p>Guest .id</p>
						<p>Name and Surname</p>
						<p>Email</p>
						<p>Confirmed: </p>
						<p>Attending: </p>
						<p>Table No: </p>
					</div>{' '}
					<div className="guest">
						<p>Guest .id</p>
						<p>Name and Surname</p>
						<p>Email</p>
						<p>Confirmed: </p>
						<p>Attending: </p>
						<p>Table No: </p>
					</div>
					<div className="guest">
						<p>Guest .id</p>
						<p>Name and Surname</p>
						<p>Email</p>
						<p>Confirmed: </p>
						<p>Attending: </p>
						<p>Table No: </p>
					</div>
					<div className="guest">
						<p>Guest .id</p>
						<p>Name and Surname</p>
						<p>Email</p>
						<p>Confirmed: </p>
						<p>Attending: </p>
						<p>Table No: </p>
					</div>
					<div className="guest">
						<p>Guest .id</p>
						<p>Name and Surname</p>
						<p>Email</p>
						<p>Confirmed: </p>
						<p>Attending: </p>
						<p>Table No: </p>
					</div>
					<div className="guest">
						<p>Guest .id</p>
						<p>Name and Surname</p>
						<p>Email</p>
						<p>Confirmed: </p>
						<p>Attending: </p>
						<p>Table No: </p>
					</div>
					<div className="guest">
						<p>Guest .id</p>
						<p>Name and Surname</p>
						<p>Email</p>
						<p>Confirmed: </p>
						<p>Attending: </p>
						<p>Table No: </p>
					</div>
					<div className="guest">
						<p>Guest .id</p>
						<p>Name and Surname</p>
						<p>Email</p>
						<p>Confirmed: </p>
						<p>Attending: </p>
						<p>Table No: </p>
					</div>
					<div className="guest">
						<p>Guest .id</p>
						<p>Name and Surname</p>
						<p>Email</p>
						<p>Confirmed: </p>
						<p>Attending: </p>
						<p>Table No: </p>
					</div>
					<div className="guest">
						<p>Guest .id</p>
						<p>Name and Surname</p>
						<p>Email</p>
						<p>Confirmed: </p>
						<p>Attending: </p>
						<p>Table No: </p>
					</div>{' '}
					<div className="guest">
						<p>Guest .id</p>
						<p>Name and Surname</p>
						<p>Email</p>
						<p>Confirmed: </p>
						<p>Attending: </p>
						<p>Table No: </p>
					</div>{' '}
					<div className="guest">
						<p>Guest .id</p>
						<p>Name and Surname</p>
						<p>Email</p>
						<p>Confirmed: </p>
						<p>Attending: </p>
						<p>Table No: </p>
					</div>{' '}
					<div className="guest">
						<p>Guest .id</p>
						<p>Name and Surname</p>
						<p>Email</p>
						<p>Confirmed: </p>
						<p>Attending: </p>
						<p>Table No: </p>
					</div>{' '}
					<div className="guest">
						<p>Guest .id</p>
						<p>Name and Surname</p>
						<p>Email</p>
						<p>Confirmed: </p>
						<p>Attending: </p>
						<p>Table No: </p>
					</div>{' '}
					<div className="guest">
						<p>Guest .id</p>
						<p>Name and Surname</p>
						<p>Email</p>
						<p>Confirmed: </p>
						<p>Attending: </p>
						<p>Table No: </p>
					</div>{' '}
					<div className="guest">
						<p>Guest .id</p>
						<p>Name and Surname</p>
						<p>Email</p>
						<p>Confirmed: </p>
						<p>Attending: </p>
						<p>Table No: </p>
					</div>{' '}
					<div className="guest">
						<p>Guest .id</p>
						<p>Name and Surname</p>
						<p>Email</p>
						<p>Confirmed: </p>
						<p>Attending: </p>
						<p>Table No: </p>
					</div>{' '}
					<div className="guest">
						<p>Guest .id</p>
						<p>Name and Surname</p>
						<p>Email</p>
						<p>Confirmed: </p>
						<p>Attending: </p>
						<p>Table No: </p>
					</div>{' '}
					<div className="guest">
						<p>Guest .id</p>
						<p>Name and Surname</p>
						<p>Email</p>
						<p>Confirmed: </p>
						<p>Attending: </p>
						<p>Table No: </p>
					</div>
				</GuestContainer>
			</Container>
		</>
	);
};

export default AttendingGuests;
