import Navbar from "./Navbar/Navbar"
import Dashboard from "./DashBoard/dashboard"
import Title from "./Title/Title"
import Program from "./Programs/program"
import About from "./About/About"
import Gallery from "./Gallery/gallery"
import Testimonials from "./testimonials/testimonials"
import Contact from "./Contact/Contact"
import Copyright from './Copyright/copyright';
function App() {

  return(
      <>
            <Navbar/>
            <Dashboard/>
            <div className="container">
                  <Title heading="our programs" subtitle="What We Offers"/>
                  <Program/>            
                  <About/>
                  <Title heading="gallery" subtitle="Campus Photos"/>
                  <Gallery/>
                  <Title heading="testimonials" subtitle="What Students Say"/>
                  <Testimonials/>
                  <Title heading="Contact Us" subtitle="Get In Touch"/>
                  <Contact/>
                  <Copyright/>
            </div>
      </>
  )
}

export default App
