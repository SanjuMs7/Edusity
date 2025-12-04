import React, { useRef, useState } from 'react'
import './Navbar.css'
import Logo from '../assets/logo.png'
import { Link} from 'react-scroll';
import MenuIcon from '../assets/menu-icon.png';
function Navbar() {
      const [coloredNavbar,setColor] = useState('') ;
      const header=useRef();
      window.addEventListener('scroll',()=>{
            if(scrollY > 50){
                  setColor('coloredNavbar') ;
            }
            else{
                  setColor('');
            }
      });
      const [flag,setFlag]=useState(false);
      const menuNavBar=()=>{
            flag?setFlag(false):setFlag(true);
      };
      
  return (
      <div className='main-outer-div'>
            <nav className={`navbar ${coloredNavbar}`} ref={header}>
                  <Link to='dashboard' smooth={true} offset={0} duration={500}>
                        <div className="img-container">
                              <img src={Logo} alt="" className='logo'/>
                        </div>
                  </Link>
                  <ul className={` links-container ${flag?"dark-nav":""}`}>
                        <li className="link">
                              <Link to="dashboard" smooth={true} offset={0} duration={500}>Home</Link>
                        </li>
                        <li className="link">
                              <Link to="programs" smooth={true} offset={-250} duration={500}>Program</Link>
                        </li>
                        <li className="link">
                              <Link to="about" smooth={true} offset={-150} duration={500}>About</Link>
                        </li>
                        <li className='link'>
                              <Link to="gallery" smooth={true} offset={-270} duration={500}>Gallery</Link>
                        </li>
                        <li className="link">
                              <Link to="testimonials" smooth={true} offset={-300} duration={500}>Testimonals</Link>
                        </li>
                        <li className="link">
                              <Link to="contact" smooth={true} offset={-270} duration={500}>
                                    <button className='contact-button-navbar'>Contact Us</button>
                              </Link>
                        </li>
                  </ul>
                  <div className="menu-icon-div" onClick={menuNavBar}>
                        <img src={MenuIcon} alt="" />
                  </div>
            </nav>
      </div>
  )
}

export default Navbar