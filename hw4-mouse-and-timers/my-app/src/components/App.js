import { Header } from './layout/header';
import { Content } from './layout/content';
import { Footer } from './layout/footer';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Timers } from './pages/timers';
import { Mouse } from './pages/mouse';
//import { useState, useEffect} from 'react';

function App() {
  
  
  return (
    <>
    <BrowserRouter>
        <Header />
        <Content>
          <Routes>
            <Route path='/' element={<Mouse />} />
            <Route path='/' element={<Navigate replace to='/mouse' />} />
            <Route path='/timers' element={<Timers/>} />
          </Routes>
        </Content>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
