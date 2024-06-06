import React from 'react';
import "../styles/about.css";

import jovial from "../assets/images/pp/jovial.jpg";
import nanang from "../assets/images/pp/nanang.jpg";
import thoriq from "../assets/images/pp/thoriq.jpg";
import shintia from "../assets/images/pp/shintia.jpg";
import izzam from "../assets/images/pp/izzam.jpg";
import putra from "../assets/images/pp/putra.jpg";

const About = () => {
  return (
    <div className='about'>
      <h1>
        About Our Project
      </h1>
      <p>
        Projek Kami ialah sebuah aplikasi pengunduh video dari media sosial Facebook, Instagram, dan Youtube
      </p>
      <h2>Contributor</h2>
      <div className='contributor'>
        <div className='person'>
          <img src={jovial} alt="" />
          <h2>Jovial Handy Putra</h2>
        </div>
        <div className='person'>
          <img src={nanang} alt="" />
          <h2>Nanang Bagus Ferdiansyah</h2>
        </div>
        <div className='person'>
          <img src={thoriq} alt="" />
          <h2>Muhammad Fariz Ath Thoriq</h2>
        </div>
        <div className='person'>
          <img src={shintia} alt="" />
          <h2>Shintia Dewi Rahmawati</h2>
        </div>
        <div className='person'>
          <img src={izzam} alt="" />
          <h2>Izzamuddin Royhul Firdaus</h2>
        </div>
        <div className='person'>
          <img src={putra} alt="" />
        <h2>Rasyid Putra Wiendata</h2>        
        </div>
      </div>
    </div>
  );
};

export default About;