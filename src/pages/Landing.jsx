import React from 'react';
import Airdrop from '../components/Airdrop';
import About from '../components/About';
import Tokenomics from '../components/Tokenomics';
import Roadmap from '../components/Roadmap';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Landing() {
  return (
    <main>
      <Airdrop />
      <About />
      <Tokenomics />
      <Roadmap />
      <Contact />
      <Footer />
    </main>
  );
}

export default Landing;
