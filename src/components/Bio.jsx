import React from 'react';

const Bio = () => {
  return (
    <div className="bio-container">
      <div className="bio-header">
        <span className="status-dot"></span>
        <span className="bio-title">FILE: IDENT_RY_DUPUIS.TXT</span>
      </div>
      
      <div className="bio-content">
        <p><span className="bio-label">LOCATION:</span> BRITISH COLUMBIA, CAN</p>
        <p><span className="bio-label">ENROLLMENT:</span> BCIT_FWD_PROG</p>
        <p className="bio-text">
          Focusing on high-energy front-end architecture and modern minimalist design. 
          Currently bridging the gap between clean WordPress builds and reactive headless environments.
        </p>
        <p className="bio-footer">// END_OF_FILE</p>
      </div>
    </div>
  );
};

export default Bio;