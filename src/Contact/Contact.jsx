import React from 'react'
import './Contact.css'
import messageIcon from '../assets/msg-icon.png';
import mailIcon from '../assets/mail-icon.png';
import phoneIcon from '../assets/phone-icon.png'
import locationIcon from '../assets/location-icon.png'
import buttonArrow from '../assets/white-arrow.png'
function Contact() {
      const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9e191370-b12e-4395-b4a6-644d263cac9a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div>
      <div className="contact">
            <div className="contact-left">
                  <h2 style={{fontWeight:"500"}}>Send us a Message <img src={messageIcon} alt="" /></h2>
                  <p className="contact-info">
                        Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.
                  </p>
                  <span className="email"><img src={mailIcon} alt="" />Contact@Sanju.dev</span>
                  <span className='phone'><img src={phoneIcon} alt="" />+91 9846179663</span>
                  <span className="location"><img src={locationIcon} alt="" />Kochi,Kerala</span>
            </div>
            <div className="contact-right">
                  <form onSubmit={onSubmit}>
                        <label htmlFor="name">Your Name</label>
                        <input type="text" name="name" id="" placeholder='Enter your name'/>
                        <label htmlFor="phone">Phone Number</label>
                        <input type="text" name="phone" id="" placeholder='Enter your mobile number'/>
                        <label htmlFor="name">Write Your messages here</label>
                        <input type="text" name="name" id="" placeholder='Enter your message' className='last-input'/>
                        <button className='Submit'>Send Now<img src={buttonArrow} alt="" /></button> 

                        <span style={{width:"100%",marginLeft:"1rem"}}>{result}</span>
                  </form>
            </div>
      </div>
    </div>
  )
}

export default Contact