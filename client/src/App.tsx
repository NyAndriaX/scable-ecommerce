import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NavBar from './layout/navigation/NavBar';
import Footer from './layout/footer/Footer';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
      <ToastContainer position="top-right" />
    </>
  );
}

export default App;
