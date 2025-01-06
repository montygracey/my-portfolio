import { useState } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('About Me');

  const handleClick = (section) => {
    setActiveSection(section);
  };

  return (
    <nav>
      <ul>
        {['About Me', 'Portfolio', 'Contact', 'Resume'].map((section) => (
          <li key={section}>
            <a
              href={`#${section.toLowerCase().replace(' ', '-')}`}
              className={activeSection === section ? 'active' : ''}
              onClick={() => handleClick(section)}
            >
              {section}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;