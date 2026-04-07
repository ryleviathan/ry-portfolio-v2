import React from 'react';

const NavItem = ({ label, code }) => {
  return (
    <div className="nav-item-wrapper">
      <div className="nav-item-glitch">
        <span className="nav-code">{code}</span>
        <span className="nav-label">{label}</span>
      </div>
      <div className="nav-scanline"></div>
    </div>
  );
};

const Navbar = () => {
  const menuItems = [
    { label: 'ARCHIVE', code: '01' },
    { label: 'SIMULATIONS', code: '02' },
    { label: 'SYSTEM_SPECS', code: '03' },
    { label: 'CONTACT', code: '04' },
  ];

  return (
    <nav className="side-nav">
      {menuItems.map((item) => (
        <NavItem key={item.code} label={item.label} code={item.code} />
      ))}
    </nav>
  );
};

export default Navbar;