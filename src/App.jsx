// src/App.jsx
import React from 'react';
import useRandomImage from './hooks/useRandomImage';
import './App.css';

const images = [
  '/images/image1.jpg',
  '/images/image2.jpg',
  '/images/image3.jpg',
  '/images/image4.jpg',
  '/images/image5.jpg'
];

const App = () => {
  const currentImage = useRandomImage(images, 1000);

  return (
    <div className="widget">
      <img src={currentImage} alt="Random" />
    </div>
  );
};

export default App;
