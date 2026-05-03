import { useState } from 'react';
import AddProjectForm from './components/AddProjectForm';
import SearchBar from './components/SearchBar';
import ProjectList from './components/ProjectList';
import './App.css';

function App() {
  //   portfolio
  const [projects, setProjects] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');

  const addProject = (newProject) => {
    setProjects([...projects, { ...newProject, id: Date.now() }]);
  };

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="app">
      <header className="app-header">
        <h1>Creative Agency Portfolio</h1>
        <p className="subtitle">
          Showcase your work | Add projects dynamically | Search your portfolio
        </p>
      </header>

      <main>
        <div className="form-section">
          <AddProjectForm onAddProject={addProject} />
        </div>

        <div className="search-section">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        </div>

        <section className="projects-section">
          <h2>Portfolio ({filteredProjects.length} projects)</h2>
          <ProjectList projects={filteredProjects} />
        </section>
      </main>

      <footer className="app-footer">
        <p>Dynamic Portfolio Platform | Add projects as you complete them</p>
      </footer>
    </div>
  );
}

export default App;
