import React from 'react';
import NavBar from './layout/navigation/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './layout/footer/Footer';
import { ToastContainer } from 'react-toast';

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Outlet />
      <Footer />
      <ToastContainer delay={3000} position="top-right" />
    </React.Fragment>
  );
};

export default App;
