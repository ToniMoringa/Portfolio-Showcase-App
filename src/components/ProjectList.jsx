import ProjectCard from './ProjectCard'

function ProjectList({ projects }) {
  if (projects.length === 0) {
    return (
      <div className="empty-state">
        <p>No projects yet. Use the form above to add your first project!</p>
        <p className="empty-hint">Your portfolio will appear here as you add work.</p>
      </div>
    )
  }

  return (
    <div className="projects-grid">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}

export default ProjectList