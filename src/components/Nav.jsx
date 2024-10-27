import React from "react";

const Nav = ({ coin }) => {
  return (
    <div>
      <div>
        <button className="px-8 border-2">{coin} Coin</button>
      </div>
    </div>
  );
};

export default Nav;
