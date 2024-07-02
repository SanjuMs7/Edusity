import React from 'react';
import './program.css';
import firstProgram from '../assets/program-1.png';
import secondProgram from '../assets/program-2.png';
import thirdProgram from '../assets/program-3.png';
import firstProgramIcon from '../assets/program-icon-1.png'
import secondProgramIcon from '../assets/program-icon-2.png'
import thirdProgramIcon from '../assets/program-icon-3.png'
function Program() {
  return (
    <div>
      <div className="programs-container" name="programs">
            <div className="first-program programs">
                  <img src={firstProgram} alt="" />
                  <div className="programIcon-div">
                        <img src={firstProgramIcon} alt="" className='programIcon'/>
                        <p>Graduation Degree</p>
                  </div>
            </div>
            <div className="second-program programs">
                  <img src={secondProgram} alt="" />
                  <div className="programIcon-div">
                        <img src={secondProgramIcon} alt="" className='programIcon'/>
                        <p>Masters Degree</p>
                  </div>
            </div>
            <div className="third-program programs">
                  <img src={thirdProgram} alt="" />
                  <div className="programIcon-div">
                        <img src={thirdProgramIcon} alt="" className='programIcon'/>
                        <p>Post Graduation</p>
                  </div>
            </div>
            
      </div>
    </div>
  )
}
export default Program;