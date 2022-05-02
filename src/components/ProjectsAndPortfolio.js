import PPCard from "./PPCard";

const ProjectsAndPortFolio = () => {
  const projects = [
    {
      title: "LUV TALK Website",
      story:
        "Website, created during my first internship, which utilized HTML, CSS, PHP, Ajax, Javascript/jQuery, and Wordpress.",
      url: "luvtalk-project",
    },
    {
      title: "Personal Website",
      story:
        "Enjoyable side project that was created to experiment with more HTML and CSS, but also provided an outlet to showcase my abilities and interests.",
      url: "personal-website-project",
    },
    {
      title: "Strike Zone Analysis",
      story:
        "Data analytics project completed during my time at the Illinois Math and Science Academy which studied the baseball strike zone based on the state of the game.",
      url: "strike-zone-project",
    },
  ];

  return (
    <div className='projects' id='projects'>
      <div className='projects-header'>
        <h1>Projects and Portfolio</h1>
      </div>

      <div className='projects-header-quote'>
        <h3>Sharing my endeavors and passions...</h3>
      </div>

      <div>
        {projects.map((project, id) => (
          <PPCard
            key={id}
            title={project.title}
            story={project.story}
            url={project.url}
          />
        ))}
      </div>

      <a className='btn btn-default btn-border' href='#'>
        More Projects
      </a>
    </div>
  );
};

export default ProjectsAndPortFolio;
