import { useState } from 'react'
import './App.css'
import { Outlet } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

let apiKey =    import.meta.env.VITE_API_KEY;
let backendUrl =import.meta.env.VITE_BACKEND_URL;

function App() {
  
  console.log(apiKey);
  return (
    <>
       <Navbar/>
       <Outlet/>
       <Footer/>
    </>
  )
}

export default App
