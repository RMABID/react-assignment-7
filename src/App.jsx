import React, { useState } from "react";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import AvailablePlayer from "./components/AvailablePlayer";

const App = () => {
  const [isActive, setIsActive] = useState({
    available: true,
  });
  const [selectedPlayer, setSelectPlayer] = useState([]);
  const handlePlayerCarts = (status) => {
    if (status == "available") {
      setIsActive({
        available: true,
        status: "available",
      });
    } else {
      setIsActive({
        available: false,
        status: "selected",
      });
    }
  };
  const [coin, setCoin] = useState(0);
  const addMorePayer = (status) => {
    if (status == "available") {
      setIsActive({
        available: true,
      });
    }
  };
  const handleSelectPlayer = (player) => {
    if (coin < player.biddingPrice) {
      alert("please add Money");
      return;
    } else {
      setCoin(coin - player.biddingPrice);
    }

    if (selectedPlayer.length >= 6) {
      alert("no more add");
      return;
    }

    const isExist = selectedPlayer.find((p) => p.playerId == player.playerId);
    if (isExist) {
      alert("tmi acho");
    } else {
      const selectedPlayers = [...selectedPlayer, player];
      setSelectPlayer(selectedPlayers);
    }
  };
  const handleCancelPlayer = (id) => {
    handleCancelPrice(id);
    const cancelPlayer = selectedPlayer.filter((p) => p.playerId != id);
    setSelectPlayer(cancelPlayer);
  };
  // console.log(selectedPlayer);
  const handleAddCoin = (coins) => {
    setCoin(coin + coins);
  };
  const handleCancelPrice = (id) => {
    const cancelAmount = selectedPlayer.find((amount) => amount.playerId == id);
    setCoin(coin + cancelAmount.biddingPrice);
  };
  return (
    <div className="mt-14">
      <Nav coin={coin}></Nav>
      <Banner handleAddCoin={handleAddCoin}></Banner>
      <AvailablePlayer
        handleCancelPlayer={handleCancelPlayer}
        handleSelectPlayer={handleSelectPlayer}
        isActive={isActive}
        addMorePayer={addMorePayer}
        handlePlayerCarts={handlePlayerCarts}
        selectedPlayer={selectedPlayer}
      ></AvailablePlayer>
    </div>
  );
};

export default App;
