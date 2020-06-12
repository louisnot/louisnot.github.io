import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Plan from './components/Plan';
import About from './components/About';
import Passion from './components/Passion';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Project from './components/Project';
function App() {
  return (
  <div className="app">
    <Banner />
    <About />
    <Project />
    <Plan />
    <Passion />
    <Contact />
    <Footer />
  </div>
  )

}

export default App;
