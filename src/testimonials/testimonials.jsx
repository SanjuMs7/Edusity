import React ,{useEffect,useState,useRef} from 'react'
import './testimonials.css'
import firstUser from '../assets/user-1.png'
import secondUser from '../assets/user-2.png'
import thirdUser from '../assets/user-3.png'
import forthUser from '../assets/user-4.png'
import nextIcon from '../assets/next-icon.png'
import backIcon from '../assets/back-icon.png'

function Testimonials() {

      const testimonialSlider=useRef();
      let tX=0;
      const nextPage=()=>{
            if(tX<50)
            {
                  tX+=50;
                  testimonialSlider.current.style.transform=`translateX(-${tX}%)`;
            }
            document.querySelector('.prev-button-div').style.opacity='1';
            document.querySelector('.next-button-div').style.opacity='.8';
            document.querySelector('.third-button-div').style.backgroundColor="#212ea0";
      }
      const prevPage=()=>{
            if(tX>=50)
            {
                  tX-=50;
                  testimonialSlider.current.style.transform=`translateX(${tX}%)`;
            }
            document.querySelector('.next-button-div').style.opacity='1';
            document.querySelector('.prev-button-div').style.opacity='.8';
            document.querySelector('.third-button-div').style.backgroundColor="#dad9d9";
      }
return (
    <div className='main-outer-div'>
      <div className="testimonials">
            <div className="slider" ref={testimonialSlider}>
                  <div className="firstUser users">
                        <div className="user-info">
                              <img src={firstUser} alt="" />
                              <div className="username">
                                    <h3 className="name">Emily Williams</h3>
                                    <span className="place">Edusity,USA</span>
                              </div>
                        </div>
                        <p>
                              Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                        </p>
                  </div>
                  <div className="secondUser users">
                        <div className="user-info">
                              <img src={secondUser} alt="" />
                              <div className="username">
                                    <h3 className="name">Williams Jackson</h3>
                                    <span className="place">Edusity,USA</span>
                              </div>
                        </div>
                        <p>
                              Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                        </p>
                  </div>
                  <div className="thirdUser users">
                        <div className="user-info">
                              <img src={thirdUser} alt="" />
                              <div className="username">
                                    <h3 className="name">Emily Williams</h3>
                                    <span className="place">Edusity,USA</span>
                              </div>
                        </div>  
                        <p>
                        Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                        </p>
                  </div>
                  <div className="forthUser users">
                        <div className="user-info">
                              <img src={forthUser} alt="" />
                              <div className="username">
                                    <h3 className="name">Williams Jackson</h3>
                                    <span className="place">Edusity,USA</span>
                              </div>
                        </div>
                        <p>
                        Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                        </p>
                  </div>
            </div>
            <div className="testimonial-button-div">
                  <div className="prev-button-div"onClick={prevPage} style={{opacity:".8"}}>
                        <img src={backIcon} alt="" />
                  </div>
                  <div className="page-indicator">
                        <div className="first-button-div buttons"></div>
                        <div className="third-button-div buttons"></div>
                  </div>
                  <div className="next-button-div" onClick={nextPage}>
                        <img src={nextIcon} alt=""/>
                  </div>
            </div>
      </div>
    </div>
  )
}

export default Testimonials