import { useState, useEffect } from "react";
import "../styles/project_style.css"

interface Repo {
  id: number;
  name: string;
  html_url: string;
};

const Projects: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/RohanMishra47/repos`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        return response.json();
      })
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="outerContainer">
      <div className="projectsContainer">
        <h1>My Projects</h1>
        {loading && <p>Loading projects...</p>}
        {error && <p className={error}>{error}</p>}
        <ul className="projectsList">
          {repos.map((repo) => (
            <li key={repo.id}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );  
};

export default Projects;