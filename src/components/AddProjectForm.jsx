import { useState } from 'react';

function AddProjectForm({ onAddProject, onClose }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      alert('Please fill in both title and description');
      return;
    }
    onAddProject({
      title: title.trim(),
      description: description.trim(),
    });
    setTitle('');
    setDescription('');
    onClose();
  };

  return (
    <div className="add-form-card">
      <form className="project-form" onSubmit={handleSubmit}>
        <h3>Add a New Project</h3>
        <input
          type="text"
          placeholder="Project title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Project description"
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <div className="form-buttons">
          <button
            type="button"
            className="frutiger-aero-button medium"
            onClick={onClose}
          >
            Cancel
          </button>
          <button type="submit" className="frutiger-aero-button medium">
            Add Project
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProjectForm;
