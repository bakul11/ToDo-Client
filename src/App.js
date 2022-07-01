import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Componets/HomePages/Home';
import Navbar from './Componets/ShareFile/Navbar/Navbar'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={ <Home></Home> }></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;