import React from 'react';

const SelectedCart = ({ player, removePlayer }) => {

  const handleRemove = () => {
    removePlayer(player);
  };

  return (
    <>
      <div className="border-1 border-gray-300 rounded-2xl flex justify-between items-center p-4 mt-4">
        <div className="flex justify-center items-center">
          <img
            className="w-[170px] h-[100px] rounded-2xl"
            src={player.player_image}
            alt=""
          />
          <div className="ml-5">
            <h3 className="font-bold text-2xl">{player.player_name}</h3>
            <p className="mt-2">{player.player_role}</p>
          </div>
        </div>
        <div onClick={handleRemove}>
          <img src="https://i.ibb.co.com/xK1Pjwrd/Frame.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default SelectedCart;