import Hello from "../components/Hello";
import AboutMe from "../components/AboutMe";
import Summary from "../components/Summary";
import ProjectAndPortFolio from "../components/ProjectsAndPortfolio";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <Hello />
      <AboutMe />
      <Summary />
      <ProjectAndPortFolio />
      <Contact />
    </>
  );
};

export default Home;
