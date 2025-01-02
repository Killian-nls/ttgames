import React, { useEffect, useState } from 'react';
import GameBtn from './min/GameBtn';
import axios from 'axios';

export default function Game() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const response = await axios.get('http://localhost:3001/getGames');
      setGames(response.data.games);
    };
    fetchGames();
  }, []);

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '10px',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#353840',
    height: '80vh',
    width: '100%',
  };
  
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',
  };

  return (
    <div style={containerStyle}>
      <div style={gridStyle}>
        {games.map(game => (
          <GameBtn key={game.id} name={game.name} imgUrl={game.imgUrl} />
        ))}
      </div>
    </div>
  );
}