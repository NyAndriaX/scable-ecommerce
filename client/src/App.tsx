import React from 'react';
import NavBar from './layout/navigation/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './layout/footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Outlet />
      <Footer />
      <ToastContainer position="top-right" />
    </React.Fragment>
  );
};

export default App;
