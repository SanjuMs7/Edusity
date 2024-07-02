import React from 'react'
import './dashboard.css'
import arrowIcon from '../assets/dark-arrow.png'
import DashboardImage from '../assets/hero.png'
function Dashboard() {
  return (
    <div>
      <div className="dashboard">
            <div className="main-content">
                 <h1> We Ensure better education for a better world</h1>
            </div>
            <div className="sub-content">
                  <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
            </div>
            <div className="dashboard-button-div">
                  <button className='dashboard-button'>Explore more<img src={arrowIcon} alt="" /></button>
            </div> 
      </div>
    </div>
  )
}

export default Dashboard