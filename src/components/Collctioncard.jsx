import React from 'react'
import img1 from '../images/collctions1.webp'
import img2 from '../images/collctions2.webp'
import img3 from '../images/collctions3.webp'
import img4 from '../images/collctions4.webp'
import { useState , useEffect , useRef } from 'react'

function Collctioncard() {

//  const [next, setNext] = useState(0)
//   const sliderInterval = useRef(null)

//    const Data = [img1, img2, img3, img4]

//   const handleNext = () => {
//     if (next === Data.length - 1) {
//       setNext(0)
//     } else {
//       setNext(next + 1)
//     }
//   }
//    const startSlider = () => {
//     sliderInterval.current = setInterval(handleNext, 2000)
//   }

//    const stopSlider = () => {
//     clearInterval(sliderInterval.current)
//   }
  
//    useEffect(() => {
//     startSlider()
//     return () => clearInterval(sliderInterval.current)
//   }, [next])
  return (
    <>
    <div className="collctions-cards container">
            <h2>Best Selling Design</h2>
            <div className="border-collction"></div>
            <div className="collctions-wrap-card">
             
                <div className="coll-card1">
                    <div className="images">
                        <img src= {img1} alt="" />
                    </div>
                        <div className="inquire-btn">
                            <button>INQUIRE NOW</button>
                        </div>
                    
                </div>
                <div className="coll-card1">
                    <div className="images">
                        <img src={img2}alt="" />
                    </div>
                        <div className="inquire-btn">
                            <button>INQUIRE NOW</button>
                        </div>
                </div>
                <div className="coll-card1">
                    <div className="images">
                        <img src={img3}alt="" />
                    </div>
                        <div className="inquire-btn">
                            <button>INQUIRE NOW</button>
                        </div>
                </div>
                <div className="coll-card1">
                    <div className="images">
                        <img src={img4} alt="" />
                    </div>
                        <div className="inquire-btn">
                            <button>INQUIRE NOW</button>
                        </div>
                </div>
            </div>
        </div>


        {/* responsive */}

        {/* <div className="collctions-cards2 container">
      <h2>Best Selling Design</h2>
      <div className="border-collction"></div>
      <div
        className="collctions-wrap-card2"
        onMouseEnter={stopSlider}
        onMouseLeave={startSlider}
      >
        {next === 0 && (
          <div className="coll-card1">
            <div className="images">
              <img src={img1} alt="" />
            </div>
            <div className="inquire-btn">
              <button>INQUIRE NOW</button>
            </div>
          </div>
        )}

        {next === 1 && (
          <div className="coll-card1">
            <div className="images">
              <img src={img2} alt="" />
            </div>
            <div className="inquire-btn">
              <button>INQUIRE NOW</button>
            </div>
          </div>
        )}

        {next === 2 && (
          <div className="coll-card1">
            <div className="images">
              <img src={img3} alt="" />
            </div>
            <div className="inquire-btn">
              <button>INQUIRE NOW</button>
            </div>
          </div>
        )}

        {next === 3 && (
          <div className="coll-card1">
            <div className="images">
              <img src={img4} alt="" />
            </div>
            <div className="inquire-btn">
              <button>INQUIRE NOW</button>
            </div>
          </div>
        )}
      </div>

   
    </div> */}
        

    </>
  )
}

export default Collctioncard