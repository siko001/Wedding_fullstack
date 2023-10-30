import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axiosClient from '../axiosClient';

const Container = styled.div`
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
	.btn {
		padding: 0.5rem 1rem;
		color: white;
		border: none;
		font-size: 1.5rem;
		margin: 0 5px;
	}
	.edit {
		background-color: rgba(151, 9, 118, 0.73);
	}
	.close {
		background-color: rgba(28, 9, 151, 0.73);
	}
	.cancel {
		background-color: red;
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

	.user-edits {
		text-align: center;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.btns {
		display: flex;
	}

	.selects {
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 5px;

		.group {
			display: flex;
			align-items: center;
			justify-content: center;
			margin-right: 20px;
			gap: 2px;
		}
	}
	.group {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 20px;
	}
`;

const AdminGuestOverlay = ({ onClose, user }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [editedUser, setEditedUser] = useState({ ...user });

	const editGuest = () => {
		setIsEditing(true);
	};

	const cancelEdit = () => {
		setIsEditing(false);
		setEditedUser({ ...user });
	};

	const saveEdit = () => {
		// Make an API request to save the edited user data
		axiosClient
			.put(`/guests/edit/${editedUser.id}`, editedUser)
			.then((res) => {
				setIsEditing(false);
				onClose();
			})
			.catch((error) => {
				console.log(error.response.message);
			});
	};

	const handleFieldChange = (event) => {
		const { name, value } = event.target;
		setEditedUser((prevUser) => ({
			...prevUser,
			[name]: value,
		}));
	};
	return (
		<Container>
			<div className="heading normal-font">{isEditing ? <h3>{editedUser.fullname}</h3> : <h3>{user.fullname}</h3>}</div>
			{isEditing ? (
				<div className="user-edits">
					<div className="group">
						Name
						<input type="text" name="fullname" value={editedUser.fullname} onChange={handleFieldChange} />
					</div>
					<div className="group">
						Email
						<input type="email" name="email" value={editedUser.email} onChange={handleFieldChange} />
					</div>
					<div className="selects">
						Confirmed:
						<div className="group">
							<input
								type="radio"
								name="confirmed"
								value="yes"
								checked={editedUser.confirmed === 'yes'}
								onChange={handleFieldChange}
							/>
							<label htmlFor="confirmedYes">Yes</label>
						</div>
						<div className="group">
							<input
								type="radio"
								name="confirmed"
								value="no"
								checked={editedUser.confirmed === 'no'}
								onChange={handleFieldChange}
							/>
							<label htmlFor="confirmedNo">No</label>
						</div>
					</div>
					<div className="selects">
						Attending:
						<div className="group">
							<input
								type="radio"
								name="attending"
								value="yes"
								checked={editedUser.attending === 'yes'}
								onChange={handleFieldChange}
							/>
							<label htmlFor="confirmedYes">Yes</label>
						</div>
						<div className="group">
							<input
								type="radio"
								name="attending"
								value="no"
								checked={editedUser.attending === 'no'}
								onChange={handleFieldChange}
							/>
							<label htmlFor="confirmedNo">No</label>
						</div>
					</div>
					<div className="group">
						Table Number
						<input
							type="number"
							max="10"
							min="1"
							name="table_number"
							value={editedUser.table_number}
							onChange={handleFieldChange}
						/>
					</div>
				</div>
			) : (
				<div className="user-details">
					<p>Confirmed: {user.confirmed}</p>
					{user.attending && <p>Attending: {user.attending}</p>}
					{user.attending === 'yes' && user.table_number && <p>Table Number: {user.table_number}</p>}
				</div>
			)}
			<div className="btns">
				{isEditing ? (
					<>
						<button className="btn cancel" onClick={cancelEdit}>
							Cancel
						</button>
						<button className="btn edit" onClick={saveEdit}>
							Save Update
						</button>
					</>
				) : (
					<button className="btn edit" onClick={editGuest}>
						Edit Guest
					</button>
				)}
				<button className="btn close" onClick={onClose}>
					Close
				</button>
			</div>
		</Container>
	);
};
export default AdminGuestOverlay;
