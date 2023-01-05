import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
    <Navbar />
    <Home />
    <AboutMe />
    <Resume />
    <Experience />
    <Contact />
    <Footer />
    <SocialLinks />
    </div>
  );
}

export default App;
