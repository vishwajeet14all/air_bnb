import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>    
    <Navbar />
    <Hero />   
    <App />
  </React.StrictMode>
);

