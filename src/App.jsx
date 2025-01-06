import { useState } from 'react';
import Header from './components/Header';
import AboutMe from './sections/AboutMe';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';
import Resume from './sections/Resume';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('About Me');

  
  const playSound = (soundFile) => {
    const audio = new Audio(soundFile);
    audio.play();
  };

 
  const playRandomSound = () => {
    const sounds = ['/sounds/click1.mp3', '/sounds/click2.mp3', '/sounds/click3.mp3'];
    const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
    const audio = new Audio(randomSound);
    audio.play();
  };

 
  const handleTabClick = (section) => {
    setActiveSection(section);

   
    switch (section) {
      case 'About Me':
        playSound('/sounds/click1.mp3'); 
        break;
      case 'Portfolio':
        playRandomSound(); 
        break;
      case 'Contact':
        playSound('/sounds/click3.mp3'); 
        break;
      case 'Resume':
        playRandomSound(); 
        break;
      default:
        break;
    }
  };

 
  const renderSection = () => {
    switch (activeSection) {
      case 'About Me':
        return <AboutMe />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div className="folder-container">
      {}
      <Header />

      {/* Folder Tabs */}
      <div className="folder-tabs">
        {['About Me', 'Portfolio', 'Contact', 'Resume'].map((section) => (
          <div
            key={section}
            className={`tab ${activeSection === section ? 'active' : ''}`}
            onClick={() => handleTabClick(section)}
          >
            {section}
          </div>
        ))}
      </div>

      {/* Folder Content */}
      <div className="folder-content">
        {renderSection()}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;