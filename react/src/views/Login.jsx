import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import axiosClient from '../axiosClient';
import { useStateContext } from '../../contexts/ContentProvider';
import AdminNavbar from '../components/AdminNavbar';
import Spinner from '../components/Spinner';

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

const Login = () => {
	const { setToken } = useStateContext();
	const [loading, setLoading] = useState(false);
	const emailRef = useRef();
	const passwordRef = useRef();
	const [message, setMessage] = useState();
	const [messageColor, setMessageColor] = useState('red-text');

	const handleLogin = (e) => {
		setLoading(true);
		setMessage(null);
		e.preventDefault();

		const payload = {
			email: emailRef.current.value,
			password: passwordRef.current.value,
		};

		axiosClient
			.post('/loginAdmin', payload)
			.then((res) => {
				setToken(res.data.token);
				localStorage.setItem('ACCESS_TOKEN', res.data.token);
				setMessageColor('green-text');
				setMessage(res.data.message);
			})
			.catch((error) => {
				if (error.response) {
					if (error.response.data.message == 'Invalid credentials') {
						setMessage(error.response.data.message);
						setMessageColor('red-text');
					} else {
						setMessage(error.response.data.message);
					}
				}
				if (error.response && error.response.data && error.response.data.errors) {
					const validationErrors = error.response.data.errors;
					for (const key in validationErrors) {
						if (validationErrors.hasOwnProperty(key)) {
							setMessage(validationErrors[key][0]);
						}
					}
				}
			})
			.finally(() => {
				setLoading(false);
			});
	};
	return (
		<>
			<Container>
				<AdminNavbar />
				<Box className="normal-font">
					<form onSubmit={handleLogin}>
						<h3 className="primary-color">Admin Login</h3>
						<h3 className={messageColor}>{message}</h3>
						<input type="email" placeholder="Email" ref={emailRef} />
						<input type="password" placeholder="Password" ref={passwordRef} />
						<button className="btn">Login</button>
					</form>
				</Box>
				{loading && <Spinner />}
			</Container>
		</>
	);
};

export default Login;
