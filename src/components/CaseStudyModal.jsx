import { useEffect } from 'react';

function CaseStudyModal({ project, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const fullDescription = `${project.description} This project involved creative strategy, modern design solutions, and measurable results for the client. The Aero Studio team delivered on time and exceeded expectations.`;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{project.title}</h2>
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="modal-body">
          <p>
            <strong>Project Overview</strong>
          </p>
          <p>{fullDescription}</p>
          <p>
            <strong>Services provided:</strong> Brand identity, UX/UI design,
            responsive development.
          </p>
        </div>
        <div className="modal-footer">
          <button className="frutiger-aero-button small" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default CaseStudyModal;
