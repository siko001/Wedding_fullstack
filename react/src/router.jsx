import { createBrowserRouter } from 'react-router-dom';
import FrontPage from './views/FrontPage';
import Location from './views/Location';
import NotFound from './views/NotFound';
import Rsvp from './views/Rsvp';
import Menus from './views/Menus';
import Gallery from './views/Gallery';
import Schedule from './views/Schedule';

//Admin Protected Routes
import Login from './views/Login';
import Register from './views/Register';
import RegisterGuest from './views/RegisterGuest';
import AttendingGuests from './views/AttendingGuests';
// import UpdateGuest from './views/UpdateGuest';

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
		path: '/menus',
		element: <Menus />,
	},
	{
		path: '/gallery',
		element: <Gallery />,
	},

	{
		path: '*',
		element: <NotFound />,
	},

	{
		path: '/schedule',
		element: <Schedule />,
	},

	{
		path: '/login',
		element: <Login />,
	},

	{
		path: '/register',
		element: <Register />,
	},

	{
		path: '/register-guest',
		element: <RegisterGuest />,
	},
	{
		path: '/attending-guests',
		element: <AttendingGuests />,
	},
]);

export default router;
