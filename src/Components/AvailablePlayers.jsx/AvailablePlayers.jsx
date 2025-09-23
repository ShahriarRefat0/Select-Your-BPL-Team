import { use} from "react";

import PlayerCart from "../PlayerCart/PlayerCart";

const AvailablePlayers = ({
  playersPromise,
  setAvailableBalance,
  availableBalance,
  purchasedPlayer,
  setPurchasedPlayer,
}) => {
  const playerData = use(playersPromise);

  return (
    <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 grid-cols-1 gap-4 mt-4">
      {playerData.map((player) => (
        <PlayerCart
          setAvailableBalance={setAvailableBalance}
          availableBalance={availableBalance}
          player={player}
          purchasedPlayer={purchasedPlayer}
          setPurchasedPlayer={setPurchasedPlayer}
        ></PlayerCart>
      ))}
    </div>
  );
};

export default AvailablePlayers;
