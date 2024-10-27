/* eslint-disable react/prop-types */
import React from "react";

const Selected = ({ selectedPlayer, addMorePayer, handleCancelPlayer }) => {
  return (
    <div>
      {selectedPlayer.map((selected, index) => (
        <div key={index}>
          <div className="flex p-3 rounded-xl gap-8 border-2">
            <h1>{selected.name}</h1>
            <button onClick={() => handleCancelPlayer(selected.playerId)}>
              Deleted
            </button>
          </div>
        </div>
      ))}
      <div>
        <button
          onClick={() => addMorePayer("available")}
          className="bg-green-300 p-3 rounded-xl"
        >
          Add More Player
        </button>
      </div>
    </div>
  );
};

export default Selected;
