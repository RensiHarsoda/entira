import React from "react";
import card1 from "../images/card-img1.png";
import card2 from "../images/card-img2.webp";
import card3 from "../images/card-img3.webp";
import card4 from "../images/card-img4.webp";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
        import 'swiper/css/navigation'; // If using navigation
        import 'swiper/css/pagination'; // If using pagination
        import 'swiper/css/scrollbar';

function About() {

  return (
     <>
    <div className="main-about-wrapper container">
      <div className="about-card container">
        <div className="card">
          <div className="card-img">
            <img src={card1} alt="" />
          </div>
          <h2 className="card-heading">Global Sourcing</h2>
          <p className="card-para">
            We specialize in sourcing premium fashion jewelry from top
            manufacturers worldwide, ensuring access to the latest trends and
            high-quality craftsmanship.
          </p>
        </div>
        <div className="card">
             <div className="card-img">
            <img src={card2} alt="" />
          </div>
          <h2 className="card-heading">Wholesale Partnerships</h2>
          <p className="card-para">
            We specialize in sourcing premium fashion jewelry from top
            manufacturers worldwide, ensuring access to the latest trends and
            high-quality craftsmanship.
          </p>
        </div>
        <div className="card">
             <div className="card-img">
            <img src={card3} alt="" />
          </div>
          <h2 className="card-heading">Custom Jewally Design</h2>
          <p className="card-para">
            We specialize in sourcing premium fashion jewelry from top
            manufacturers worldwide, ensuring access to the latest trends and
            high-quality craftsmanship.
          </p>
        </div>
        <div className="card">
             <div className="card-img">
            <img src={card4} alt="" />
          </div>
          <h2 className="card-heading">Global Shipping & Liogistic</h2>
          <p className="card-para">
            We specialize in sourcing premium fashion jewelry from top
            manufacturers worldwide, ensuring access to the latest trends and
            high-quality craftsmanship.
          </p>
        </div>
      </div>
    </div>


    {/* responsive */}

    <div className="main-about-wrapper container">
        
      <div className="about-card2">
        <Swiper
         modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
         <SwiperSlide>
        <div className="card">
          <div className="card-img">
            <img src={card1} alt="" />
          </div>
          <h2 className="card-heading">Global Sourcing</h2>
          <p className="card-para">
            We specialize in sourcing premium fashion jewelry from top
            manufacturers worldwide, ensuring access to the latest trends and
            high-quality craftsmanship.
          </p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card">
             <div className="card-img">
            <img src={card2} alt="" />
          </div>
          <h2 className="card-heading">Wholesale Partnerships</h2>
          <p className="card-para">
            We specialize in sourcing premium fashion jewelry from top
            manufacturers worldwide, ensuring access to the latest trends and
            high-quality craftsmanship.
          </p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card">
             <div className="card-img">
            <img src={card3} alt="" />
          </div>
          <h2 className="card-heading">Custom Jewally Design</h2>
          <p className="card-para">
            We specialize in sourcing premium fashion jewelry from top
            manufacturers worldwide, ensuring access to the latest trends and
            high-quality craftsmanship.
          </p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card">
             <div className="card-img">
            <img src={card4} alt="" />
          </div>
          <h2 className="card-heading">Global Shipping & Liogistic</h2>
          <p className="card-para">
            We specialize in sourcing premium fashion jewelry from top
            manufacturers worldwide, ensuring access to the latest trends and
            high-quality craftsmanship.
          </p>
        </div>
        </SwiperSlide>
        </Swiper>
      </div>
      
    </div>
  
   </>
  );
}

export default About;
