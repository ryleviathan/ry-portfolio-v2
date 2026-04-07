import React from 'react';

const SystemSpecs = () => {
  const skills = [
    { category: 'ENGINE', tech: 'REACT + VITE' },
    { category: 'LOGIC', tech: 'PHP + MYSQL' },
    { category: 'DESIGN', tech: 'ADOBE_XD + AI' },
    { category: 'STATUS', tech: 'LEVEL_1_DEV' }
  ];

  return (
    <div className="system-specs">
      <div className="specs-header">[SYSTEM_DIAGNOSTICS]</div>
      {skills.map((item, index) => (
        <div key={index} className="spec-row">
          <span className="spec-label">{item.category}:</span>
          <span className="spec-value">{item.tech}</span>
        </div>
      ))}
      <div className="specs-footer">BUILD_04.2026</div>
    </div>
  );
};

export default SystemSpecs;