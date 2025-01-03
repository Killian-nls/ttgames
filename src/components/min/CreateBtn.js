import React from 'react';
import createImage from '../../assets/images/create.png';

export default function createBtn() {

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
    width: '30vw',
    height : '40vh',
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
    width: '10vw',
  };
  
  const handleMouseEnter = (e) => {
      e.currentTarget.style.transform = 'scale(1.05)';
  };
  
  const handleMouseLeave = (e) => {
      e.currentTarget.style.transform = 'scale(1)';
  };

  const handleClick = () => {
      window.location.href = `/game/create`;
  };
  
  return (
      <div
          style={cardStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
      >
          <img src={createImage} style={imageStyle} />
          <h3>Create game</h3>
          <p></p>
      </div>
  );
}