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
  const [currentView, setCurrentView] = useState('DASHBOARD');

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
        setTimeout(() => setIsBooted(true), 1000); 
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
          <Navbar setView={setCurrentView} /> 
          <SystemSpecs />
          
          <div className="main-content">
            
            {/* 00: DASHBOARD */}
            {currentView === 'DASHBOARD' && (
              <>
                <h1 className="glitch-text" data-text="RY DUPUIS">RY DUPUIS</h1>
                <p style={{ color: 'var(--volt)', marginBottom: '20px' }}>// STATUS: READY_TO_BUILD</p>
                <Bio />
              </>
            )}

            {/* 01: ARCHIVE */}
            {currentView === 'ARCHIVE' && (
              <div className="project-grid">
                {projectData
                  .filter(project => project.title !== 'RY_FIGHTER_II_JS')
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            )}

            {/* 02: SIMULATIONS */}
            {currentView === 'SIMULATIONS' && (
              <div className="project-grid">
                {projectData
                  .filter(project => project.title === 'RY_FIGHTER_II_JS')
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            )}

            {/* 03: SYSTEM_SPECS */}
            {currentView === 'SYSTEM_SPECS' && (
              <section className="specs-view">
                <h2 className="glitch-text" data-text="HARDWARE_CAPABILITIES">HARDWARE_CAPABILITIES</h2>
                <div className="specs-list" style={{ color: 'var(--volt)', marginTop: '20px' }}>
                  <p>&gt; OS: REACT_VITE_2.0</p>
                  <p>&gt; FRONT_END: JAVASCRIPT_ES6 / HTML5 / CSS3</p>
                  <p>&gt; BACK_END: PHP / MYSQL / WORDPRESS_API</p>
                  <p>&gt; TOOLS: VS_CODE / MAMP / TERMINAL / PS5 / MACOS / ADOBE</p>
                </div>
              </section>
            )}

            {/* 04: CONTACT */}
            {currentView === 'CONTACT' && (
              <section className="contact-view">
                <h2 className="glitch-text" data-text="ESTABLISH_CONNECTION">ESTABLISH_CONNECTION</h2>
                <div className="contact-links" style={{ marginTop: '20px' }}>
                  <p>&gt; EMAIL: <a href="mailto:RYLEVIATHAN@GMAIL.COM" style={{ color: 'var(--solar-flare)' }}>RYLEVIATHAN@GMAIL.COM</a></p>
                  <p>&gt; GITHUB: <a href="https://github.com/ryleviathan" style={{ color: 'var(--solar-flare)' }}>[/RYLEVIATHAN]</a></p>
                </div>
              </section>
            )}

          </div>
        </>
      )}
    </div>
  );
}

export default App;