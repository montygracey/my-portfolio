import React from 'react';
import projectGif from '../assets/images/project.gif'; 

const Portfolio = () => {
  const projects = [
    {
      title: 'D&D Monster Search',
      image: projectGif,
      deployed: 'https://montygracey.github.io/dnd-monster-search/',
      github: 'https://github.com/montygracey/dnd-monster-search.git',
    },
    
  ];

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <img src={project.image} alt={`${project.title} Demo`} className="project-image" />
            <div className="project-links">
              <a href={project.deployed} target="_blank" rel="noopener noreferrer">
                Deployed Application
              </a>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                GitHub Repository
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;