import React from 'react'
import './home.css';
import Feature from '../feature/Feature';
import Tech from '../tech/Tech';
import About from '../about/About';
import Contact from '../contact/Contact';
function Home() {
  return (
    <>
    <div className="home_container">
      <div className="image_container">
        <img src="home.png" alt="logo"/>
      </div>
      </div>
      <Tech/>
      <Feature/>
      <About/>
      <Contact/>
    </>
  )
}

export default Home;
