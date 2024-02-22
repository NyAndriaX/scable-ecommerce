import App from './App';
import Home from './views/Home/Home';
import Login from './views/Auth/Login';
import NotFound from './views/NotFound';
import Register from './views/Auth/Register';
import Account from './views/Account/Account';
import { createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from './views/ProtectedRoute';
import AuthProtectedRoute from './views/AuthProtectedRoute';

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
        path: '/account/*',
        element: (
          <ProtectedRoute>
            <Account />
          </ProtectedRoute>
        ),
      },
      {
        path: '/register',
        element: (
          <AuthProtectedRoute>
            <Register />
          </AuthProtectedRoute>
        ),
      },

      {
        path: '/login',
        element: (
          <AuthProtectedRoute>
            <Login />
          </AuthProtectedRoute>
        ),
      },
    ],
  },
]);
