function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      {project.url && project.url !== '#' && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="card-link"
        >
          View Project →
        </a>
      )}
    </div>
  );
}

export default ProjectCard;
