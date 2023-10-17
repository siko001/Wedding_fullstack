import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Us from '../components/Us';
import Timer from '../components/Timer';
import Invite from '../components/Invite';
import Footer from '../components/Footer';
import Spinner from '../components/Spinner';
import React, { useState } from 'react';

const App = () => {
	const [showSpinner, setShowSpinner] = useState(false);
	return (
		<>
			<Header />
			<Navbar />
			<Us />
			<Timer />
			<Invite setShowSpinner={setShowSpinner} />
			<Footer />
			{showSpinner && <Spinner />}
		</>
	);
};

export default App;
