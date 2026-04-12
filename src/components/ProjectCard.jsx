import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <a href={project.link} className="project-card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="project-card">
        <div className="card-header">
          <span className="card-id">ID: {project.id}</span>
          <span className="card-status">{project.status}</span>
        </div>
        <h3 className="card-title">{project.title}</h3>
        <p className="card-tech">// {project.tech}</p>
        <p className="card-desc">{project.description}</p>
        <div className="card-action">{"ACCESS_FILE_>"}</div>
      </div>
    </a>
  );
};

export default ProjectCard;