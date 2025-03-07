import PageTransition from "../components/PageTransition";
import React, { useEffect, useState } from "react";
import "../styles/Projects.css";

interface Project {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/RohanMishra47/repos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        return response.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="loading">Loading projects...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <PageTransition>
      <div className="projects-container">
      <h2>My GitHub Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description || "No description available."}</p>
            <a href={project.html_url} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
    </PageTransition>
  );
};

export default Projects;