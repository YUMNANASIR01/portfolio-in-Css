import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Skills from "./components/Skill";
import Work from "./components/Work";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
      <Footer />
    </div>
  );
}

