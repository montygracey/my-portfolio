import React from 'react';
import avatar from '../assets/images/avatar.jpg'; 

const AboutMe = () => {
  return (
    <section id="about-me">
      <h2>About Me</h2>
      <div className="about-content">
        <img src={avatar} alt="Monty's Avatar" className="avatar" />
        <div>
          <p>
            Hello, my name is Monty, and I am a web developer. I am looking forward to creating more projects in the future. My other passions are sound design and audio engineering.
          </p>
          <p>This is a lot of content to make the page scrollable...</p>
          {Array.from({ length: 20 }).map((_, index) => (
            <p key={index}>This is paragraph number {index + 1}.</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;