import React from 'react'
import './About.css'
import AboutImage from '../assets/about.png';
import PlayIcon from '../assets/play-icon.png'
function About() {
  return (
    <div>
      <div className="about">
            <div className="about-left">
                  <img src={AboutImage} alt="" className='main-image'/>
                  {/* <img src={PlayIcon} alt=""  className='playicon'/> */}
            </div>
            <div className="about-right">
                  <div className="heading">
                        <h3 className='main-heading'>about university</h3>
                        <h2 className="subheading">Nurturing Tomorrow's Leaders Today</h2>
                  </div>
                  <div className="paragraph-div">
                        <p className="first-paragraph">
                              Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.
                        </p>
                        <p className='second-paragraph'>
                              With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.
                        </p>
                        <p className="third-paragraph">
                              Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.
                        </p>
                  </div>
            </div>
      </div>
    </div>
  )
}

export default About