import React, { useState } from 'react';
import styled from 'styled-components';
import axiosClient from '../axiosClient';

const Conatiner = styled.div`
	z-index: 999;
	width: 50%;
	height: 100%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 40px;
	align-items: center;
	justify-content: center;
	background-color: rgba(0, 0, 0, 0.9);
	position: fixed;
	top: 0;
	left: 25%;
	color: #fff;

	@media screen and (max-width: 850px) {
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
	}

	ul {
		list-style: none;
		text-align: center;
		font-size: 1.5rem;
	}
	.heading {
		display: flex;
		justify-content: space-between;
		align-items: center;
		text-align: center;

		h3 {
			font-size: 5rem;
		}
	}
	.close-btn {
		padding: 0.5rem 1rem;
		color: white;
		background-color: rgba(151, 9, 118, 0.73);
		border: none;
		width: 25%;
		font-size: 1.5rem;
	}

	.user-details {
		text-align: center;
		display: flex;
		flex-direction: column;
		gap: 40px;
		font-size: 1.5rem;
		padding: 0 20px;
		font-family: 'Open Sans', Arial, sans-serif;
	}
	input {
		margin-right: 10px;
	}

	.attendance-btn {
		padding: 0.5rem 1rem;
		color: white;
		background-color: rgba(151, 9, 118, 0.73);
		font-size: 1.5rem;
		border: none;
	}
`;

const UserOverlay = ({ user, onClose, setShowSpinner }) => {
	const [selectedValue, setSelectedValue] = useState('yes');
	const [responseMessage, setResponseMessage] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		setShowSpinner(true);

		axiosClient
			.put('/confirm_guest', { confirmed: 'yes', attending: selectedValue, email: user.email })
			.then((response) => {
				if (response.status === 200) {
					setResponseMessage(response.data.message);
				}
			})
			.catch((error) => {
				if (error.response && error.response.status === 422) {
					const errorMessage = error.response.data.message;
					console.error('Validation Error:', errorMessage);
				} else {
					console.error('An error occurred:', error);
				}
			})
			.finally(() => {
				setShowSpinner(false);
			});
	};

	return (
		<Conatiner>
			<div className="heading">
				<h3 className="styled-font">Your Details</h3>
			</div>
			<div className="user-details">
				<p>{user.fullname}</p>
				{responseMessage && (
					<div>
						<p>{responseMessage}</p>
					</div>
				)}
				{user.confirmed === null ? (
					<form onSubmit={handleSubmit}>
						<h3 className="primary-color">Attending?</h3>
						<br></br>
						<label>
							<input
								type="radio"
								defaultChecked={true}
								name="attendance"
								value="yes"
								onChange={() => setSelectedValue('yes')}
							/>
							Yes, I Confirm my attendance
						</label>
						<br></br>
						<br></br>
						<label>
							<input type="radio" name="attendance" value="no" onChange={() => setSelectedValue('no')} />
							Sorry, won't make it
						</label>
						<br></br>
						<br></br>
						<button
							className={responseMessage ? 'attendance-btn disabled' : 'attendance-btn'}
							disabled={responseMessage ? true : false}
						>
							Submit Attendance
						</button>
					</form>
				) : (
					<div>
						<p>Attending: {user.attending}</p>
						<br />
						{user.attending === 'yes' ? (
							<p>Table Number: {user.table_number ? user.table_number : 'To be assigned'}</p>
						) : (
							<p>We're sorry you won't be able to make it! If you change your mind, please contact Neil.</p>
						)}
					</div>
				)}
			</div>
			<br></br>
			<button className="close-btn" onClick={onClose}>
				Close
			</button>
		</Conatiner>
	);
};

export default UserOverlay;
