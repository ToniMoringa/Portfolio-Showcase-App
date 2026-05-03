import { useState } from 'react';

function AddProjectForm({ onAddProject }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      alert('Please fill at least Title and Description');
      return;
    }
    onAddProject({
      title: title.trim(),
      description: description.trim(),
      url: url.trim() || '#',
    });
    setTitle('');
    setDescription('');
    setUrl('');
  };

  return (
    <div className="form-card">
      <h2>Add New Project</h2>
      <form className="project-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Project title *"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Project description *"
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="url"
          placeholder="Project URL (optional)"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type="submit" className="glossy-btn">
          + Add to Portfolio
        </button>
      </form>
    </div>
  );
}

export default AddProjectForm;
