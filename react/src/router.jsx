import { createBrowserRouter } from 'react-router-dom';
import FrontPage from './views/FrontPage';
import Location from './views/Location';
import NotFound from './views/NotFound';
import Rsvp from './views/Rsvp';

const router = createBrowserRouter([
	{
		path: '/',
		element: <FrontPage />,
	},

	{
		path: '/location',
		element: <Location />,
	},

	{
		path: '/rsvp',
		element: <Rsvp />,
	},

	{
		path: '*',
		element: <NotFound />,
	},
]);

export default router;
