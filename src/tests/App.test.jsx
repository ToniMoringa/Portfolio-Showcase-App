import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import '@testing-library/jest-dom/vitest';
import App from '../App';

describe('Aero Studio Portfolio', () => {
  // Clear localStorage before each test
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders the header', () => {
    render(<App />);
    expect(screen.getByText('AERO STUDIO')).toBeInTheDocument();
    expect(screen.getByText('Creative Agency Portfolio')).toBeInTheDocument();
  });

  it('displays all 3 permanent projects', () => {
    render(<App />);
    expect(screen.getByText('Project 1')).toBeInTheDocument();
    expect(screen.getByText('Project 2')).toBeInTheDocument();
    expect(screen.getByText('Project 3')).toBeInTheDocument();
  });

  it('filters projects when searching', () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText('Search projects...');

    fireEvent.change(searchInput, { target: { value: 'Project 1' } });

    expect(screen.getByText('Project 1')).toBeInTheDocument();
    expect(screen.queryByText('Project 2')).not.toBeInTheDocument();
  });

  it('adds a new project via form submission', () => {
    render(<App />);

    // Open form
    fireEvent.click(screen.getByText('Add New Project'));

    // Fill form
    fireEvent.change(screen.getByPlaceholderText('Project title'), {
      target: { value: 'Test Project' },
    });
    fireEvent.change(screen.getByPlaceholderText('Project description'), {
      target: { value: 'Test Description' },
    });

    // Submit
    fireEvent.click(screen.getByText('Add Project'));

    // Verify new project appears
    expect(screen.getByText('Test Project')).toBeInTheDocument();
  });

  it('opens and closes case study modal', () => {
    render(<App />);

    // Open modal on first project
    fireEvent.click(screen.getAllByText('View Case Study →')[0]);

    // Modal content appears
    expect(screen.getByText('Project Overview')).toBeInTheDocument();

    // Close modal
    fireEvent.click(screen.getByText('Close'));

    // Modal content gone
    expect(screen.queryByText('Project Overview')).not.toBeInTheDocument();
  });
});
