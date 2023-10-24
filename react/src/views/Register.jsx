import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import axiosClient from '../axiosClient';
import AdminNavbar from '../components/AdminNavbar';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
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

const Register = () => {
	const nameRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();
	const [message, setMessage] = useState();

	const handleRegister = (e) => {
		setMessage('');
		e.preventDefault();

		const payload = {
			name: nameRef.current.value,
			email: emailRef.current.value,
			password: passwordRef.current.value,
		};

		axiosClient
			.post('/registerAdmin', payload)
			.then((res) => {
				setMessage(res.data.message);
				console.log(res);
			})
			.catch((error) => {
				if (error.response && error.response.data && error.response.data.errors) {
					const validationErrors = error.response.data.errors;
					for (const key in validationErrors) {
						if (validationErrors.hasOwnProperty(key)) {
							setMessage(validationErrors[key][0]);
						}
					}
				}
			});
	};
	return (
		<Container>
			<AdminNavbar />
			<Box className="normal-font">
				<form onSubmit={handleRegister}>
					Admin Registeration
					<p className="err">{message && message}</p>
					<input type="text" placeholder="Name" ref={nameRef} />
					<input type="email" placeholder="Email" ref={emailRef} />
					<input type="password" placeholder="Password" ref={passwordRef} />
					<button className="btn">Register</button>
				</form>
			</Box>
		</Container>
	);
};

export default Register;
