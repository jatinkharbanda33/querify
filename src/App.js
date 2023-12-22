
import "./App.css";
import Header from "./components/Header";
import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Footer/>
    </div>
  );
}

export default App;
