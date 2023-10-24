import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import axiosClient from '../axiosClient';
import AdminNavbar from '../components/AdminNavbar';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background-color: #ffffee;
`;
const Box = styled.div`
	width: 500px;
	height: 500px;
	background-color: #fff;

	form {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		gap: 20px;
	}
`;

const RegisterGuest = () => {
	const nameRef = useRef();
	const emailRef = useRef();

	const [message, setMessage] = useState();

	const handleRegisterGuest = (e) => {
		setMessage(null);
		e.preventDefault();

		const payload = {
			fullname: nameRef.current.value,
			email: emailRef.current.value,
		};

		axiosClient
			.post('/registerGuest', payload)
			.then((res) => {
				setMessage(res.data.message);
			})
			.catch((error) => {
				if (error.response) {
					setMessage(error.response.data.message);
				}
				if (error.response && error.response.data && error.response.data.errors) {
					const validationErrors = error.response.data.errors;
					for (const key in validationErrors) {
						if (validationErrors.hasOwnProperty(key)) {
							setMessage(validationErrors[key][0]);
						} else {
							setMessage(error.response.data.message);
						}
					}
				}
			});
	};
	return (
		<Container>
			<AdminNavbar />
			<Box className="normal-font">
				<form onSubmit={handleRegisterGuest}>
					Guest Registration
					<p className="err">{message && message}</p>
					<input type="text" placeholder="Name" ref={nameRef} />
					<input type="email" placeholder="Email" ref={emailRef} />
					<button className="btn">Register Guest</button>
				</form>
			</Box>
		</Container>
	);
};

export default RegisterGuest;
