import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Spinner from '../components/Spinner';
import Invite from '../components/Invite';

const Rsvp = () => {
	const [showSpinner, setShowSpinner] = useState(false);
	return (
		<div>
			<Navbar />
			<Invite setShowSpinner={setShowSpinner} />
			{showSpinner && <Spinner />}
			<Footer />
		</div>
	);
};

export default Rsvp;
