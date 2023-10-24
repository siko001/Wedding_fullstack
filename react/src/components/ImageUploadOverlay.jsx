import React, { useState } from 'react';
import styled from 'styled-components';
import axiosClient from '../axiosClient';

const Container = styled.div`
	.response {
		font-size: 2rem;
		color: green;
	}

	form {
		display: flex;
		flex-direction: column;
	}
	input {
		position: relative;
		left: 30px;
		margin: 20px auto;
		display: flex;
	}

	input::placeholder {
		position: relative;
		left: 200px;
	}
	button {
		padding: 1rem 1.5rem;
		font-size: 1rem;
		background-color: blue;
		color: white;
		border: none;
	}
`;
const Title = styled.h2`
	font-size: 2rem;
`;

const ImageUploadOverlay = ({ user, setShowSpinner }) => {
	const [image, setImage] = useState(null);
	const [responseMessage, setResponseMessage] = useState(null);
	const handleImageUpload = (e) => {
		e.preventDefault();

		setShowSpinner(true);

		const formData = new FormData();

		formData.append('image', image);
		formData.append('email', user.email);
		formData.append('fullname', user.fullname);

		axiosClient
			.post('/uploadImg', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			.then((response) => {
				if (response.status === 200) {
					setResponseMessage(response.data.message);
					setUser(true);
					setImage(null);
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

	const handleImageChange = (e) => {
		setImage(e.target.files[0]);
	};
	return (
		<Container>
			<Title className="styled-font">
				Guest {user.fullname} Verified.
				<br />
				You Can now Upload
			</Title>

			<form onSubmit={handleImageUpload}>
				<input name="image" type="file" onChange={handleImageChange} />

				{responseMessage && <p className="response">{responseMessage}</p>}
				<button className="imageConfirm" type="submit">
					Confirm Upload
				</button>
			</form>
		</Container>
	);
};

export default ImageUploadOverlay;
