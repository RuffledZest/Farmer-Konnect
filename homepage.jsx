// import { useState } from 'react'

import FinalDashboard from './dashboard';
import './src/App.css';
import Hero from './src/components/hero';
import DisplayImage from './src/components/hero2';
import FeaturesContainer from './src/components/hero3';
import FarmersKonnect from './src/components/hero4';
import App1 from './src/components/navbar';


function HomePage() {

  return (
    <>
        
      <App1 />
      <Hero />
      
      <DisplayImage />
      <FeaturesContainer />
      <FarmersKonnect />
    </>
  )
}

export default HomePage;
