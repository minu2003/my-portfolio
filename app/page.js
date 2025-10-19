import AboutMe from "./components/Aboume";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/footer";
import LandingPage from "./components/landingpage";
import Navbar from "./components/navbar";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="" id="home">
      <Navbar/>
      <LandingPage/>
      <AboutMe/>
      <Projects/>
      <ExperienceSection/>
      <Footer/>
    </div>
  );
}
