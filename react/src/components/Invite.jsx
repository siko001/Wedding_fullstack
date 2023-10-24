import React from 'react';
import styled from 'styled-components';
import { Parallax } from 'react-parallax';
import image from '/images/wedding.jpg';
import { useRef, useState } from 'react';
import { useStateContext } from '../../contexts/ContentProvider';
import axiosClient from '../axiosClient';
import ErrorOverlay from './ErrorOverlay';
import UserOverlay from './UserOverlay';

const Container = styled.div`
	position: relative;
`;
const Text = styled.div`
	position: absolute;
	width: 100%;
	top: 20%;
	margin: 0 auto;
	z-index: 1;
	color: #fff;
	text-align: center;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
	display: flex;
	flex-direction: column;
	gap: 100px;

	@media screen and (max-width: 1000px) {
		gap: 70px;
	}

	@media screen and (max-width: 750px) {
		gap: 40px;
	}

	.attending {
		font-size: 4rem;
		@media screen and (max-width: 750px) {
			font-size: 3rem;
		}
	}

	.fill-in-form {
		font-size: 2rem;
		@media screen and (max-width: 750px) {
			font-size: 1rem;
		}
	}
`;

const Form = styled.div`
	display: flex;
	justify-content: center;

	form {
		display: flex;
		gap: 20px;
	}

	input {
		background-color: rgba(0, 0, 0, 0.4);
		height: 40px;
		outline: none;
		border: none;
		padding: 20px;
		color: white;
		width: 300px;

		@media screen and (max-width: 1000px) {
			width: 230px;
		}
	}

	input::placeholder {
		color: white;
	}

	.btn {
		height: 40px;
		background-color: #396caf;
		border: none;
		color: #fff;
		width: 300px;
		@media screen and (max-width: 1000px) {
			width: 230px;
		}
	}

	@media screen and (max-width: 750px) {
		form {
			display: flex;
			flex-direction: column;
			width: 80%;
			gap: 50px;
		}
		input {
			width: 100%;
		}

		.btn {
			width: 100%;
		}
	}
`;

const Invite = ({ setShowSpinner }) => {
	const emailRef = useRef();
	const nameRef = useRef();
	const [user, setUser_] = useState(null);
	const [errors, setErrors] = useState();
	const { setUser } = useStateContext();
	const [showUserOverlay, setShowUserOverlay] = useState(false);

	const onCloseErrorOverlay = () => {
		setErrors(null);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		const payload = {
			name: nameRef.current.value,
			email: emailRef.current.value,
		};

		// Check if either name or email is empty
		if (!nameRef || !emailRef) {
			setErrors({
				emptyFields: ['Please fill in both Name and Email fields.'],
			});
			return;
		}

		setErrors(null);
		setShowSpinner(true);
		axiosClient
			.post('/getinvite', payload, { headers: { requireAuth: true } })
			.then(({ data }) => {
				setUser_(data.user);
				setUser(data.user);
				setShowUserOverlay(true);
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
		<Container>
			<Parallax className="parallax-box2" strength={500} bgImage={image}></Parallax>
			<Text>
				<p className="styled-font white attending">
					Are You Attending?
					<br />
					<span className="normal-font  fill-in-form">Please Find your Invitaion by filling in the details Provided Below</span>
				</p>

				<Form>
					<form onSubmit={onSubmit}>
						<input ref={nameRef} className="input" type="text" placeholder="Name and Surname" />
						<input ref={emailRef} className="input" placeholder="Email Address" />
						<button className="btn">Find My Invitation</button>
					</form>
				</Form>
			</Text>
			{errors && <ErrorOverlay errors={errors} onClose={onCloseErrorOverlay} />}
			{showUserOverlay && <UserOverlay user={user} onClose={() => setShowUserOverlay(false)} setShowSpinner={setShowSpinner} />}
		</Container>
	);
};

export default Invite;
