// import { Button, Modal } from "antd"
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
// import { Button, Modal, notification } from 'antd';

function App() {


  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <Outlet />
      <Footer />
    </>
  )
}


export default App


