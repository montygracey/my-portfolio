import Project from '../components/Project';

const Portfolio = () => {
  const projects = [
    { title: 'Project 1', image: 'path/to/image1.jpg', deployedLink: '#', githubLink: '#' },
    // I will add more projects here
  ];

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;