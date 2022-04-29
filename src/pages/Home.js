import Hello from "../components/Hello";
import AboutMe from "../components/AboutMe";
import Summary from "../components/Summary";
import ProjectAndPortFolio from "../components/ProjectsAndPortfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hello />
      <AboutMe />
      <Summary />
      <ProjectAndPortFolio />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
