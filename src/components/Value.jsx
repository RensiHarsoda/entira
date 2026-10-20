import React from 'react'
import img1 from '../images/value-img.webp'
import detsimg1 from '../images/card-img6.png'
import detsimg2 from '../images/card-img7.webp'
import detsimg3 from '../images/contact-img2.webp'
import detsimg4 from '../images/card-img2.webp'
function Value() {
  return (
    <div className="main-value-sec d-flex">
        <div className="value-content">
            <div className="heading-dets">
                <h2>OUR VALUE</h2>
                <h1>Fashion and style in every thing we own.</h1>
                <p>Experience the art of jewelry created with precision and care. Our dedication to quality ensures that every piece is not only beautiful but also built to last.</p>
                <div className="value-border"></div>
            </div>
            <div className="value-wrap">
                 <div className="value-dets">
                <div className="value-img">
                    <img src={detsimg1} alt="" className='img-w'/>
                </div>
                <span>Expertise</span>
                <p>Our knowledge in gemstones, metals, and craftsmanship ensures that every piece is crafted to perfection .</p>
            </div>
            <div className="value-dets">
                <div className="value-img">
                    <img src={detsimg2} alt="" className='img-w-2'/>
                </div>
                <span>Innovation</span>
                <p>We push the limits of traditional jewelry design, blending timeless elegance with modern creativity.</p>
            </div>
            </div>
            <div className="value-wrap">
            <div className="value-dets">
                <div className="value-img">
                    <img src={detsimg3} alt="" className='img-w' />
                </div>
                <span>Perfection</span>
                <p>Attention to detail is our hallmark, resulting in pieces that are not only beautiful but truly distinctive</p>
            </div>
            <div className="value-dets">
                <div className="value-img">
                    <img src={detsimg4} alt="" className='img-w'/>
                </div>
                <span>Evolution</span>
                <p>Our knowledge in gemstones, metals, and craftsmanship ensures that every piece is crafted to perfection .</p>
            </div>
            </div>
           
        </div>
        <div className="value-girl-img">
            <img src={img1} alt="" className='girl-img'/>
        </div>
    </div>
  )
}

export default Value