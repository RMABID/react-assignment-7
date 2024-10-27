import React from "react";

const Banner = ({ handleAddCoin }) => {
  return (
    <div>
      <div>
        <button
          onClick={() => handleAddCoin(5000000)}
          className="p-3 px-6 bg-green-500"
        >
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;
