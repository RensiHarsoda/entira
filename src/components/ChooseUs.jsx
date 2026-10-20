import React from 'react'
import card1 from '../images/card-img4.webp'
import card2 from '../images/card-img2.webp'
import card3 from '../images/card-img5.webp'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'; // If using navigation
import 'swiper/css/pagination'; // If using pagination
import 'swiper/css/scrollbar';
function ChooseUs() {
    return (
        <>
            <div className="main-wrap-chooseus">
                <div className="bg-image"></div>
                <div className="choose-main-sec">
                    <div className="choose-heading">
                        <h2>Why Choose Us</h2>
                        <h1>Jewelry Crafted Just For You</h1>
                        <p>Experience the art of jewelry created with precision and care. Our dedication to quality ensures that every piece is not only beautiful but also built to last.</p>
                    </div>
                    <div className="chooseus-card-wrap container">
                        <div className="chooseus-card">
                            <div className="choose-card-img">
                                <img src={card1} alt="" />
                            </div>
                            <h2>Top Grade Matrials</h2>
                            <p>Bibendum dictumst morbi risus in augue himenaeos nunc nisl faucibus</p>
                        </div>
                        <div className="chooseus-card">
                            <div className="choose-card-img">
                                <img src={card2} alt="" />
                            </div>
                            <h2>Master Craftsmanship</h2>
                            <p>Our team of professional jewelers brings decades of experience and artistry to each design. Every piece is crafted with meticulous attention to detail</p>
                        </div>
                        <div className="chooseus-card">
                            <div className="choose-card-img">
                                <img src={card3} alt="" />
                            </div>
                            <h2>Around-the-Clock Support</h2>
                            <p>Our customer support team is available around the clock to assist with any inquiries or needs</p>
                        </div>
                    </div>


                    {/* responsive */}

                    <div className="chooseus-card-wrap2 container">
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={50}
                            slidesPerView={1}
                            // navigation
                            pagination={{ clickable: true }}
                            // scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}>
                            <SwiperSlide>
                                <div className="chooseus-card2">

                                    <div className="choose-card-img">
                                        <img src={card1} alt="" />
                                    </div>
                                    <h2>Top Grade Matrials</h2>
                                    <p>Bibendum dictumst morbi risus in augue himenaeos nunc nisl faucibus</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="chooseus-card2">
                                    <div className="choose-card-img">
                                        <img src={card2} alt="" />
                                    </div>
                                    <h2>Master Craftsmanship</h2>
                                    <p>Our team of professional jewelers brings decades of experience and artistry to each design. Every piece is crafted with meticulous attention to detail</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="chooseus-card2">
                                    <div className="choose-card-img">
                                        <img src={card3} alt="" />
                                    </div>
                                    <h2>Around-the-Clock Support</h2>
                                    <p>Our customer support team is available around the clock to assist with any inquiries or needs</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChooseUs