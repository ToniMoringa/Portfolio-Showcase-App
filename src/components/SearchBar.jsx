import { Search } from 'lucide-react';

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-card">
      <Search className="search-icon" size={20} />
      <input
        type="text"
        className="search-input"
        placeholder="Search projects..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
