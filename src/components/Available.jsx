import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";

const Available = ({ handleSelectPlayer, selectedPlayer }) => {
  const [players, setPlayer] = useState([]);
  useEffect(() => {
    fetch("player.json")
      .then((res) => res.json())
      .then((data) => setPlayer(data));
  });
  return (
    <div>
      {players.map((player, index) => (
        <div key={index}>
          <div>
            <h1>{player.name}</h1>
            <button
              onClick={() => handleSelectPlayer(player)}
              className="p-3 border-2 rounded-xl"
            >
              Chose Player
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Available;
