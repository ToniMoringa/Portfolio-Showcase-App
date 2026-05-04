import ProjectCard from './ProjectCard';

function ProjectList({ projects }) {
  if (projects.length === 0) {
    return (
      <div className="empty-state">
        <p>No projects match your search.</p>
      </div>
    );
  }

  return (
    <div className="projects-grid">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectList;
