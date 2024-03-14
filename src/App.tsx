import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import HomePageComponent from './components/pages/HomePageComponent';
import OnePage from './components/pages/Onepage';
import TwoPage from './components/pages/TwoPage';
import ThreePage from './components/pages/ThreePage';
import FourPage from './components/pages/FourPage';
import FivePage from './components/pages/FivePage';

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent/>
      <Routes>
        <Route path='/' element={<HomePageComponent/>}/>
        <Route path='carnegie' element={<OnePage/>}/>
        <Route path='ofv' element={<TwoPage/>}/>
        <Route path='evvent' element={<ThreePage/>}/>
        <Route path='goit' element={<FourPage/>}/>
        <Route path='paccoast' element={<FivePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
