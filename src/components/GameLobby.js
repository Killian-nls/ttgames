import React, { useEffect, useState } from 'react';
import GameBtn from './min/GameBtn';
import CreateBtn from './min/CreateBtn';
import axios from 'axios';

export default function GameLobby() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const protocol = process.env.REACT_APP_PROTOCOL;
      const host = process.env.REACT_APP_HOST;
      const port = process.env.REACT_APP_BACKPORT;

      console.log(protocol);

      if (!protocol || !host || !port) {
        console.error('Missing environment variables for API URL');
        return;
      }

      const url = `${protocol}://${host}:${port}/getGames`;

      try {
        const response = await axios.get(url);
        setGames(response.data.games);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    };
    fetchGames();
  }, []);

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
    overflowY: 'scroll',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    gap: '5vw',
    padding: '2vh 2vw',
    backgroundColor: '#353840',
    minHeight: '80vmin',
  };

  return (
      <div style={gridStyle}>
        {games.map(game => (
          <GameBtn key={game.id} game={game} />
        ))}
        <CreateBtn />
      </div>
  );
}