import React from 'react'
import design1 from '../images/design1.webp'
import design2 from '../images/design2.webp'
import design3 from '../images/design3.webp'
import design4 from '../images/design4.webp'
import design5 from '../images/design5.webp'
import design6 from '../images/design6.webp'
import design7 from '../images/design7.webp'
import design8 from '../images/design8.webp'
import { useNavigate } from 'react-router-dom'
function Design() {

    const navigate = useNavigate();

    const handleClick = () => {
    //    alert("hiii")
    navigate('/AllProduct')
    }

  return (
    <div className="trands-main-sec">
        <div className="trands-heading">
            <h1>Latest Trends</h1>
            <p>Immerse yourself in our curated selection of exquisite jewelry, designed to combine timeless elegance with modern flair.</p>
        </div>
        <div className="images-folder container">
            <div className="design-card1">
                                <div className="images-design">
                                    <img src= {design1} alt="" />
                                </div>
                                    <div className="inquire-btn-design">
                                        <button>INQUIRE NOW</button>
                                    </div>
                                
            </div>
              <div className="design-card1">
                                <div className="images-design">
                                    <img src= {design2} alt="" />
                                </div>
                                    <div className="inquire-btn-design">
                                        <button>INQUIRE NOW</button>
                                    </div>
                                
            </div>
              <div className="design-card1">
                                <div className="images-design">
                                    <img src= {design3} alt="" />
                                </div>
                                    <div className="inquire-btn-design">
                                        <button>INQUIRE NOW</button>
                                    </div>
                                
            </div>
              <div className="design-card1">
                                <div className="images-design">
                                    <img src= {design4} alt="" />
                                </div>
                                    <div className="inquire-btn-design">
                                        <button>INQUIRE NOW</button>
                                    </div>
                                
            </div>
            <div className="design-card1">
                                <div className="images-design">
                                    <img src= {design5} alt="" />
                                </div>
                                    <div className="inquire-btn-design">
                                        <button>INQUIRE NOW</button>
                                    </div>
                                
            </div>
            <div className="design-card1">
                                <div className="images-design">
                                    <img src= {design6} alt="" />
                                </div>
                                    <div className="inquire-btn-design">
                                        <button>INQUIRE NOW</button>
                                    </div>
                                
            </div>
            <div className="design-card1">
                                <div className="images-design">
                                    <img src= {design7} alt="" />
                                </div>
                                    <div className="inquire-btn-design">
                                        <button>INQUIRE NOW</button>
                                    </div>
                                
            </div>
            <div className="design-card1">
                                <div className="images-design">
                                    <img src= {design8} alt="" />
                                </div>
                                    <div className="inquire-btn-design">
                                        <button>INQUIRE NOW</button>
                                    </div>
                                
            </div>
        </div>
        <div className="design-btn">
            <button onClick={handleClick}>VIEW ALL</button>
        </div>
    </div>
  )
}

export default Design