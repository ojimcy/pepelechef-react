import React, { useState } from 'react';
import logo from '../assets/images/pepelecheflogo.png';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <header>
        <div className="container">
          <h1>
            <img src={logo} alt="PepeLeChef Logo" className="logo-image" />
            PepeLeChef
          </h1>
          <div>
            <nav className={showMenu ? 'show' : ''}>
              <ul>
                <li>
                  <a href="#airdrop">Airdrop</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#tokenomics">Tokenomics</a>
                </li>
                <li>
                  <a href="#roadmap">Roadmap</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
            <div
              className={`menu-toggle ${showMenu ? 'active' : ''}`}
              onClick={toggleMenu}
            >
              <i className={showMenu ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
          </ div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
