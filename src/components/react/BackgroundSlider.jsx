import React, { useState, useEffect } from 'react';

const BackgroundSlider = ({ images, interval = 7000, className }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Set the initial background
    const element = document.querySelector(`.${className}`);
    if (element) {
      element.style.backgroundImage = `url(${images[index]})`;
    }

    // Preload the first image
    const img = new Image();
    img.src = images[1];

    const timerId = setInterval(() => {
      const nextIndex = (index + 1) % images.length;
      setIndex(nextIndex);

      // Preload the next image
      const preloadImg = new Image();
      preloadImg.src = images[nextIndex];

      if (element) {
        element.style.backgroundImage = `url(${images[nextIndex]})`;
        element.style.transition = `background-image 1s ease-in-out`;
      }
    }, interval);

    return () => clearInterval(timerId);
  }, [images, index, interval, className]);

  return null; // This component does not render anything
}

export default BackgroundSlider;
