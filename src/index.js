import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import "./css/style.css";
import "./css/proxima-nova/style.css";
import "./css/romantica/style.css";
import Index from "./index/index";
import WeddingInfo from './wedding-info';
import { initializeApp } from "firebase/app";
import Footer from './components/Footer';
import OurStory from "./our-story/index";
import FAQs from "./faq/index";
import Registry from "./registry/index";

const firebaseConfig = {
  apiKey: "AIzaSyAXcVE2D6KOsP1XBtxCd7R60XFlSS8Zivg",
  authDomain: "wedding-website-6cbcd.firebaseapp.com",
  projectId: "wedding-website-6cbcd",
  storageBucket: "wedding-website-6cbcd.appspot.com",
  messagingSenderId: "130434191450",
  appId: "1:130434191450:web:9e7f932bd51a55adf50863"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="wedding-info" element={<WeddingInfo/>} />
        <Route path="our-story" element={<OurStory/>}/>
        <Route path="faq" element={<FAQs/>}/>
        <Route path="contact" element="contact"/>
        <Route path="rsvp" element="rsvp"/>
        <Route path="registry" element={<Registry/>} />
        <Route path="*" element="no page"/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
