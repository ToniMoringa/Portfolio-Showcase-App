import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import ProjectList from './components/ProjectList';
import AddProjectForm from './components/AddProjectForm';
import './App.css';

function App() {
  // Permanent sample projects from mockup
  const permanentProjects = [
    { id: 1, title: 'Project 1', description: 'Description of the project' },
    { id: 2, title: 'Project 2', description: 'Description of the project' },
    { id: 3, title: 'Project 3', description: 'Description of the project' },
  ];

  // User-added projects from localStorage
  const [userProjects, setUserProjects] = useState(() => {
    const saved = localStorage.getItem('aero_user_projects');
    return saved ? JSON.parse(saved) : [];
  });

  const allProjects = [...userProjects, ...permanentProjects];
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);

  // Save user projects to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('aero_user_projects', JSON.stringify(userProjects));
  }, [userProjects]);

  const addProject = (newProject) => {
    const projectWithId = {
      ...newProject,
      id: Date.now(),
    };
    setUserProjects([projectWithId, ...userProjects]);
  };

  const filteredProjects = allProjects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="brand-heading">AERO STUDIO</h1>
        <p className="tagline">Creative Agency Portfolio</p>
      </header>

      <main>
        <div className="search-section">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        </div>

        <section className="projects-section">
          <ProjectList projects={filteredProjects} />
        </section>

        <div className="add-section">
          <button
            className="frutiger-aero-button large"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? ' Cancel' : ' Add New Project'}
          </button>

          {showForm && (
            <div className="form-container">
              <AddProjectForm
                onAddProject={addProject}
                onClose={() => setShowForm(false)}
              />
            </div>
          )}
        </div>
      </main>

      <footer className="app-footer">
        <p>(c) 2026 Antonia Muthwa</p>
      </footer>
    </div>
  );
}

export default App;
