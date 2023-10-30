import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AdminNavbar from '../components/AdminNavbar';
import axiosClient from '../axiosClient';
import Spinner from '../components/Spinner';
import AdminGuestOverlay from '../components/AdminGuestOverlay';

const Container = styled.div`
	padding-top: 105px;
	min-height: 100vh;
	max-width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background-color: #ffffee;

	.filterbtns {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
	}

	input {
		height: 30px;
		text-align: center;
	}

	.filterbtns .btn {
		margin: 5px;
	}
`;
const GuestContainer = styled.div`
	padding: 40px;
	background-color: #fff;
	justify-content: center;
	gap: 80px;
	text-align: center;
	display: flex;
	flex-wrap: wrap;
	@media screen and (max-width: 750px) {
		gap: 10px;
		padding: 40px 0;
	}

	.guest {
		padding: 0.5rem 1rem;
		border: 1px solid rgba(0, 0, 0, 0.2);
	}
`;

const AttendingGuests = () => {
	const [allGuests, setAllGuests] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [filter, setFilter] = useState('all');
	const [searchQuery, setSearchQuery] = useState('');
	const [isAdmin, setIsAdmin] = useState(false);
	const [selectedGuest, setSelectedGuest] = useState(null);

	useEffect(() => {
		setIsLoading(true);
		axiosClient
			.get('/guests/all')
			.then((res) => {
				setAllGuests(res.data.all);
			})
			.catch((err) => {
				setIsAdmin(err.response.data.message);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [selectedGuest]);

	const handleSearchInputChange = (e) => {
		setSearchQuery(e.target.value);
	};

	const handleGuestClick = (guest) => {
		setSelectedGuest(guest);
	};

	const closeGuestOverlay = () => {
		setSelectedGuest(null);
	};

	const filterButtons = [
		{ label: 'All Guests', value: 'all' },
		{ label: 'All Confirmed', value: 'confirmed' },
		{ label: 'Not Confirmed', value: 'not-confirmed' },
		{ label: 'All Attending', value: 'attending' },
		{ label: 'Not Attending', value: 'not-attending' },
	];

	const filteredGuests = allGuests.filter((guest) => {
		if (filter === 'confirmed') {
			return guest.confirmed === 'yes';
		} else if (filter === 'not-confirmed') {
			return guest.confirmed === 'no';
		} else if (filter === 'attending') {
			return guest.attending === 'yes';
		} else if (filter === 'not-attending') {
			return guest.attending === 'no';
		}
		return true;
	});

	// Modify the filteredGuests array to include the search query
	const searchFilteredGuests = filteredGuests.filter((guest) => {
		const search = searchQuery.toLowerCase();
		return guest.fullname.toLowerCase().includes(search) || (guest.table_number && guest.table_number.toString() === search);
	});

	return (
		<Container>
			<AdminNavbar />
			<br />
			<input type="text" placeholder="Search for a guest..." value={searchQuery} onChange={handleSearchInputChange} />
			<br />
			<div className="filterbtns">
				{filterButtons.map((button) => (
					<button
						key={button.value}
						className={`btn ${filter === button.value ? 'selected' : ''}`}
						onClick={() => setFilter(button.value)}
					>
						{button.label}
					</button>
				))}
			</div>
			<br />
			<GuestContainer>
				{isAdmin && <h1>Please Log in As Admin</h1>}
				{searchFilteredGuests.map((guest) => (
					<div onClick={() => handleGuestClick(guest)} key={guest.id} className="guest">
						<p>Guest {guest.id}</p>
						<p>{guest.fullname}</p>
						<p>{guest.email}</p>
						<p>Confirmed: {guest.confirmed}</p>
						{guest.attending && <p>Attending: {guest.attending}</p>}
						{guest.table_number && <p>Table No: {guest.table_number}</p>}
					</div>
				))}
			</GuestContainer>
			{isLoading && <Spinner />}
			{selectedGuest && <AdminGuestOverlay onClose={closeGuestOverlay} user={selectedGuest} />}
		</Container>
	);
};

export default AttendingGuests;
