/* eslint-disable react/prop-types */
import React from "react";
import Available from "./Available";
import Selected from "./Selected";

const AvailablePlayer = ({
  selectedPlayer,
  handlePlayerCarts,
  isActive,
  addMorePayer,
  handleSelectPlayer,
  handleCancelPlayer,
}) => {
  return (
    <div>
      <div>
        {isActive.available ? (
          <h1 className="text-3xl mt-4">Available Players</h1>
        ) : (
          <h1 className="text-3xl mt-4">
            selected Players (
            {selectedPlayer.length >= 6 ? "6/6" : `${selectedPlayer.length}/6`})
          </h1>
        )}
      </div>
      <div className="flex justify-between">
        <button
          onClick={() => handlePlayerCarts("available")}
          className={`${
            isActive.available
              ? "p-3 bg-green-400"
              : "bg-transparent border-2 p-3 rounded-xl"
          }`}
        >
          Available
        </button>
        <button
          onClick={() => handlePlayerCarts("selected")}
          className={`${
            isActive.available
              ? "bg-transparent p-3 border-2 rounded-xl"
              : "p-3 bg-green-400"
          }`}
        >
          Selected
        </button>
      </div>
      {isActive.available ? (
        <Available handleSelectPlayer={handleSelectPlayer}></Available>
      ) : (
        <Selected
          handleCancelPlayer={handleCancelPlayer}
          selectedPlayer={selectedPlayer}
          addMorePayer={addMorePayer}
        ></Selected>
      )}
    </div>
  );
};

export default AvailablePlayer;
