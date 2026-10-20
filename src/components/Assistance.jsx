import React from "react";
import assicard from '../images/card-img4.webp'
import assicard2 from '../images/card-img2.webp'
import assicard3 from '../images/card-img2.webp'

function Assistance() {
  return (
    <div className="assistance-main-sec">
      <div className="assi-heading">
        <h1>Need Assistance</h1>
        <p>
          Our support team is here to help with any questions or concerns.
          Whether you have inquiries about our products or need assistance with
          an order, we’ve got you covered.
        </p>
      </div>
       <div className="assi-card-wrap container">
                  <div className="assi-card">
                      <div className="assi-card-img">
                        <img src={assicard} alt="" />  
                      </div>
                      <h2>Customer Care</h2>
                      <p>Bibendum dictumst morbi risus in augue himenaeos nunc nisl faucibus</p>

                      <div className="assi-btn-design">
                                        <button>Chat Now</button>
                                    </div>
                  </div>
                    <div className="assi-card">
                      <div className="assi-card-img">
                        <img src={assicard2} alt="" />  
                      </div>
                      <h2>Submit a Request</h2>
                      <p>Bibendum dictumst morbi risus in augue himenaeos nunc nisl faucibus</p>
                      <div className="assi-btn-design">
                                        <button>Contact us</button>
                                    </div>
                  </div>
                    <div className="assi-card">
                      <div className="assi-card-img">
                        <img src={assicard3} alt="" />  
                      </div>
                      <h2>Industry Update</h2>
                      <p>Bibendum dictumst morbi risus in augue himenaeos nunc nisl faucibus</p>
                      <div className="assi-btn-design">
                                        <button>Read Now</button>
                                    </div>
                  </div>
      </div>
    </div>
  );
}

export default Assistance;
