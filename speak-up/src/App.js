import './App.css'
import './index.css'
import CardHolder from './Pages/CardHolder'
import PricingPage from './Pages/PricingPage'
import Footer from './components/Footer'
import Hero from './Pages/Hero'
import { ComplexNavbar } from './components/ComplexNavbar'
import Testimonials from './Pages/Testimonials'
import Features from './Pages/Features'
import Popularity from './Pages/Popularity'
import Info from './Pages/Info'
import LanguageSlider from './Pages/LanguageSlider'
import Categories from './Pages/Categories'
import Video from './Pages/videos'
import Player from './Pages/Player'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReviewCarousel from './components/ReviewCarousel'
import { useState, useEffect } from 'react'


function App() {
  const [width, setWidth] =  useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
<BrowserRouter>
<ComplexNavbar/>
   
      <Routes>

      <Route path="/" element={<div className='bg-white'>
    <Hero/>
    <Features/>
    <CardHolder/>
    {(width > 850) ? <PricingPage/> : ""}
    <Video/>
    {/* <Carosel/> */}
    <LanguageSlider/>
    <Categories/>
    <Testimonials/>
    <Popularity/>
    {/* <Free/> */}
    <ReviewCarousel />
    <Info/>
    </div>}/>
          <Route path="/player" element={<Player />} />
      </Routes>
      <Footer/>
    </BrowserRouter>

  )
}

export default App
