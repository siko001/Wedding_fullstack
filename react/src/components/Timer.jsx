import React from 'react';
import styled from 'styled-components';
import Countdown from 'react-countdown';

const Section = styled.section`
	margin-top: 100px;
	height: 50vh;
`;
const Container = styled.div`
	width: 75%;
	height: 100%;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;

	.timer {
		display: flex;
		gap: 150px;
		@media screen and (max-width: 1000px) {
			gap: 100px;
		}
		@media screen and (max-width: 750px) {
			gap: 50px;
		}
	}

	.time-container {
		display: flex;
		flex-direction: column;
		text-align: center;
	}

	.counter {
		font-size: 7rem;
		color: #fff;
		@media screen and (max-width: 750px) {
			font-size: 3.5rem;
		}
	}

	.counter-text {
		color: #fff;
	}
`;

const Timer = () => {
	const targetDate = new Date('2024-06-15T17:00:00').getTime();

	const renderer = ({ days, hours, minutes, seconds, completed }) => {
		if (completed) {
			// Handle what should be displayed when the countdown is complete
			return <span>Wedding Day!</span>;
		} else {
			return (
				<div className="timer">
					<div className="time-container">
						<p className="counter styled-font">{days}</p>
						<p className="normal-font counter-text"> days</p>
					</div>
					<div className="time-container">
						<p className="counter styled-font">{hours}</p> <p className="normal-font counter-text">hours</p>
					</div>
					<div className="time-container">
						<p className="counter styled-font">{minutes}</p> <p className="normal-font counter-text">minutes</p>
					</div>
					<div className="time-container">
						<p className="counter styled-font"> {seconds}</p> <p className="normal-font counter-text">seconds</p>
					</div>
				</div>
			);
		}
	};

	return (
		<Section>
			<Container>
				<Countdown date={targetDate} renderer={renderer} />
			</Container>
		</Section>
	);
};

export default Timer;
