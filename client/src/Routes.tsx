import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import NotFound from './views/NotFound';
import Home from './views/Home/Home';
import Register from './views/Auth/Register';
import Login from './views/Auth/Login';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: '/',
        element: <Home />,
      },
      {
        path: '/register',
        element: <Register />,
      },

      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);
