import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from './Component/Nav/Nav';
import Banner from './Component/Banner/Banner';
import Content from './Component/content/content';
import reportWebVitals from './reportWebVitals';
import Aboutme from './Component/aboutme/aboutme';
import Footer from './Component/footer/footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav/>
    <Banner/>
    <Content/>
    <Aboutme/>
    <Footer/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
