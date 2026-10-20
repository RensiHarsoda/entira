import React from "react";
import Logo from "../images/logo-entira.webp";
import Header from "./Header";

function Hero() {
  return (
    <>
    <div className="hero-img">
       <Header/>
    </div>
    <div className="main-wrap-hero">
     <Header/>
      <div className="hero-content container">
        <h2 className="hero-heading">WELCOME TO ENTIRA</h2>
        <p className="hero-para">
          Where Global Elegance Meets Craftsmanship. Import-Export of Premium
          Fashion Jewelry.
        </p>
        <p className="hero-para2">
          At Entira, we specialize in sourcing and delivering high-quality
          fashion jewelry worldwide. Our unique designs blend traditional
          craftsmanship with modern aesthetics, bringing global trends to
          wholesale markets.
        </p>
      </div>
    </div>
    </>
  );
}

export default Hero;
