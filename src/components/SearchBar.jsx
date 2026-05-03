function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-card">
      <input
        type="text"
        className="search-input"
        placeholder="Search projects by title..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
