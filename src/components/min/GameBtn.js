import React from 'react';
// import './GameBtn.css';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/));

export default function GameBtn({ name, imgUrl }) {
  const imagePath = images[imgUrl];

  const getRandomPastelColor = () => {
      const r = Math.floor(Math.random() * 127 + 127);
      const g = Math.floor(Math.random() * 127 + 127);
      const b = Math.floor(Math.random() * 127 + 127);
      return `rgb(${r}, ${g}, ${b})`;
  };
  
  const cardStyle = {
      backgroundColor: getRandomPastelColor(),
      borderRadius: '15px',
      display: 'flex',
      width : '200px',
      height : '200px',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      cursor: 'pointer',
      transition: 'transform 0.2s',
      justifySelf: 'center',
      alignSelf: 'center',
  };
  
  const imageStyle = {
      maxWidth: '100%',
      maxHeight: '100px',
  };
  
  const handleMouseEnter = (e) => {
      e.currentTarget.style.transform = 'scale(1.05)';
  };
  
  const handleMouseLeave = (e) => {
      e.currentTarget.style.transform = 'scale(1)';
  };
  
  return (
      <div
          style={cardStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
      >
          <img src={imagePath} alt={name} style={imageStyle} />
          <h3>{name}</h3>
      </div>
  );
}