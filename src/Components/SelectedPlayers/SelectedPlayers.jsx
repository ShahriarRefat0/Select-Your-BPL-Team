import React from 'react';
import SelectedCart from '../SelectedCart/SelectedCart';

const SelectedPlayers = ({ purchasedPlayer, removePlayer }) => {
  return (
    <div className="max-w-[1200px] mx-auto">
      {purchasedPlayer.map((player) => (
        <SelectedCart
          removePlayer={removePlayer}
          player={player}
        ></SelectedCart>
      ))}
    </div>
  );
};

export default SelectedPlayers;