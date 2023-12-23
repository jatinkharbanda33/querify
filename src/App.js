import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Footer from "./components/Footer";
import './App.css';

function App() {
 return (
   <Router>
     <div className="App">
       <Header />
       <Routes>
         <Route path="/about" element={<About />}/>
         <Route path="/blog" element={<Blogs />}/>
         <Route path="/" element={<Hero />}/> 
       </Routes>
       <Footer/>
     </div>
   </Router>
 );
}

export default App;
