import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import SystemSpecs from './components/SystemSpecs';
import Bio from './components/Bio';
import { projectData } from './data/projects';
import ProjectCard from './components/ProjectCard';

function App() {
  const [bootLog, setBootLog] = useState([]);
  const [isBooted, setIsBooted] = useState(false);

  const lines = [
    "> Initializing Vite_Dev_Server...",
    "> Loading_Palette: SOLAR_FLARE (#FF6511)... OK",
    "> Loading_Palette: VOLT_ACID (#CEFF00)... OK",
    "> GITHUB_SYNC: COMPLETE [RY_V2.0]",
    "> RUNNING: Ry_Dupuis_Portfolio.exe",
  ];

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < lines.length) {
        setBootLog((prev) => [...prev, lines[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
        setTimeout(() => setIsBooted(true), 1000); // Reveal main site after 1s
      }
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="terminal-container">
      {!isBooted ? (
        /* --- STATE 01: BOOTING --- */
        <div className="boot-sequence">
          {bootLog.map((line, index) => (
            <p key={index} style={{ color: index % 2 === 0 ? 'var(--solar-flare)' : 'var(--volt)' }}>
              {line}
            </p>
          ))}
          <span className="cursor">_</span>
        </div>
      ) : (
        /* --- STATE 02: BOOTED (MAIN SITE) --- */
        <>
          <Navbar /> 
          <SystemSpecs />
          
          <div className="main-content">
            <h1 className="glitch-text" data-text="RY DUPUIS">RY DUPUIS</h1>
            <p style={{ color: 'var(--volt)', marginBottom: '20px' }}>// STATUS: READY_TO_BUILD</p>
            <Bio />

            {/* THE PROJECT VAULT */}
          <div className="project-grid">
            {projectData.map((project) => (
          <ProjectCard key={project.id} project={project} />
          ))}
          </div>
          </div>
        </>
      )}
    </div>
  )
}

export default App