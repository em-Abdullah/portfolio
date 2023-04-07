import Main from "../components/Main"
import About from "../components/About"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import Certifications from "../components/Certifications"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const Homepage = () => {
    return (
        <div>
            <Main />
            <About />
            <Projects />
            <Skills />
            {/* <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
      <Carousel>
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
      </Carousel>
    </div> */}
            <Certifications />
            <Contact />

            <Footer />
        </div>
    )
}

export default Homepage
