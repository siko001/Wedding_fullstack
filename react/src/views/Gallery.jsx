import React, { useState, useEffect, useRef } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import { useStateContext } from '../../contexts/ContentProvider';
import axiosClient from '../axiosClient';
import Spinner from '../components/Spinner';
import ErrorOverlay from '../components/ErrorOverlay';
import UserUploadingOverlay from '../components/ImageUploadOverlay';
import GalleryItems from '../components/Images';

const Section = styled.div`
	text-align: center;
	font-size: 4rem;

	form {
		align-items: center;
		justify-content: center;
		display: flex;
		gap: 10px;
		input {
			height: 30px;
			outline-color: #396caf;
		}

		button {
			height: 30px;
			padding: 0 0.5rem;
			background-color: #396caf;
			border: none;
			color: white;
		}

		button:hover {
			cursor: pointer;
		}

		@media screen and (max-width: 750px) {
			flex-direction: column;
			input {
				width: 60%;
			}
		}
	}

	.error-message {
		color: red;
	}
`;
const Title = styled.div`
	margin: 50px 0 10px;
`;

const Gallery = () => {
	const emailRef = useRef();
	const nameRef = useRef();
	const [user, setUser_] = useState(null);
	const [errors, setErrors] = useState(false);
	const { setUser, setToken } = useStateContext();
	const [showUserUploadingOverlay, setShowUserUploadingOverlay] = useState(false);
	const [showSpinner, setShowSpinner] = useState(false);
	const [uploadedImages, setUploadedImages] = useState(null);

	const onCloseErrorOverlay = () => {
		setErrors(null);
	};

	const handleCheckUser = (e) => {
		e.preventDefault();
		const payload = {
			name: nameRef.current.value,
			email: emailRef.current.value,
		};

		// Check if either name or email is empty
		if (!payload.name || !payload.email) {
			setErrors({
				emptyFields: ['Please fill in both Name and Email fields.'],
			});
			return;
		}

		setErrors(false);
		setShowSpinner(true);

		axiosClient
			.post('/verifyUser', payload)
			.then(({ data }) => {
				setUser_(data.user);
				setUser(data.user);
				setToken(data.token);
				setShowUserUploadingOverlay(true);
				setUploadedImages(e);
				console.log(uploadedImages);
			})
			.catch((error) => {
				const response = error.response;
				if (response && response.status === 422) {
					if (response.data.errors) {
						setErrors(response.data.errors);
					} else {
						setErrors({
							email: [response.data.message],
						});
					}
				}
			})
			.finally(() => {
				setShowSpinner(false);
			});
	};

	return (
		<div>
			<Navbar />
			<Section>
				{showSpinner && <Spinner />}
				<Title className="styled-font primary-color">Share Your Memories</Title>
				<form onSubmit={handleCheckUser}>
					{user ? (
						''
					) : (
						<>
							<input ref={nameRef} placeholder="Full Name" />
							<input ref={emailRef} placeholder="Email" />
							<button>Upload Memories</button>
						</>
					)}
				</form>
				{errors && <ErrorOverlay errors={errors} onClose={onCloseErrorOverlay} />}
				{showUserUploadingOverlay && (
					<UserUploadingOverlay user={user} onClose={() => setShowUserUploadingOverlay(false)} setShowSpinner={setShowSpinner} />
				)}
			</Section>
			<Section>
				<Title className="styled-font primary-color">Bringing Back Memories</Title>
				<GalleryItems uploadedImages={uploadedImages} />
			</Section>
			<Footer />
		</div>
	);
};

export default Gallery;
