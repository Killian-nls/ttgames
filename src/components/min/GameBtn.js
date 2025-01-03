import React from 'react';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/));

export default function GameBtn({ game }) {
  const imagePath = images[game.imgUrl];

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
      width : '30vw',
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
      window.location.href = `/game/${game.id}`;
  };
  
  return (
      <div
          style={cardStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
      >
          <img src={imagePath} alt={game.name} style={imageStyle} />
          <h3>{game.name}</h3>
          <p>{game.nbPlayers}/{game.nbPlayersMax} Joueurs</p>
      </div>
  );
}