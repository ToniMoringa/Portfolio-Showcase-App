import { useState } from 'react';
import CaseStudyModal from './CaseStudyModal';

function ProjectCard({ project }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="project-card">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <button
          className="frutiger-aero-button small card-link"
          onClick={() => setModalOpen(true)}
        >
          View Case Study →
        </button>
      </div>

      {modalOpen && (
        <CaseStudyModal project={project} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}

export default ProjectCard;
