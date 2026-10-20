import React from 'react'
import girl from '../images/contact-img1.webp'
import ring from '../images/contact-img2.webp'

function Contact() {
  return (
    <div className="main-warp-contact container">
      <div className="contact-contant">
        <h2 className='contact-heading'>WHO WE ARE</h2>
        <p className='contact-para'>Global Fashion Jewelry Experts With Roots in Global Trade</p>
        <p className='contact-para2'>With decades of expertise in the jewelry industry, we blend traditional craftsmanship with modern innovation to bring you exceptional</p>
        <div className="contact-btn">
          <button>INQUIRE NOW</button>
        </div>
      </div>
      <div className="contact-img-box">
        <div className="contact-img">
          <img src={girl}/>
        </div>
        <div className="contact-card">
          <img src={ring} alt="" />
          <h2 className='contact-card-heading'>Expert Jewelry Craft </h2>
          <p className='contact-card-para'>Our artisans specialize in creating custom-designed jewelry, crafted to meet your unique style and needs.</p>
        </div>


        <div className="contact-card2">
          <img src={ring} alt="" />
          <h2 className='contact-card2-heading'>Expert Jewelry Craft </h2>
          <p className='contact-card2-para'>Our artisans specialize in creating custom-designed jewelry, crafted to meet your unique style and needs.</p>
        </div>
      </div>
    </div>
  )
}

export default Contact