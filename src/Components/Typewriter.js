// import React from "react";

import React, { useState, useEffect } from 'react';
import './Styles/TypewriterStyle.css'; // Make sure to create a CSS file and import it

const Typewriter = () => {
  const textToDisplay = "Hey there, I'm Mowumi, a Front-end developer."; // The text you want to display with the typewriter effect
  const [displayedText, setDisplayedText] = useState('');

  const typeWriter = () => {
    let currentIndex = 0;
    const speed = 100; // Adjust this value to control the typing speed

    const type = () => {
      if (currentIndex < textToDisplay.length) {
        setDisplayedText(textToDisplay.slice(0, currentIndex + 1));
        currentIndex++;
        setTimeout(type, speed);
      }
    };

    type();
  };

  useEffect(() => {
    typeWriter();
  }, []);

  return (
    <div>
      <span className="typewriter">{displayedText}</span>
    </div>
  );
};


export default Typewriter;
