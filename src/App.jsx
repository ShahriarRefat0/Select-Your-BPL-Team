import { Suspense, useState } from "react";
import "./App.css";
import AvailablePlayers from "./Components/AvailablePlayers.jsx/AvailablePlayers";
import Navbar from "./Components/Navbar/Navbar";
import SelectedPlayers from "./Components/SelectedPlayers/SelectedPlayers";
import { ToastContainer } from "react-toastify";



const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};
const playersPromise = fetchPlayers();

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(6000000)
  const [purchasedPlayer, setPurchasedPlayer] = useState([]);
  const removePlayer = (p) => {

    const filteredData = purchasedPlayer.filter(ply => ply.id !== p.id)
  
    setPurchasedPlayer(filteredData)
    setAvailableBalance(availableBalance + parseInt(p.price))
  }

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <h1 className="font-bold text-2xl">
          {toggle
            ? "Available Players"
            : `Selected Players (${purchasedPlayer.length}/6)`}
        </h1>

        <div className="font-bold">
          <button
            onClick={() => setToggle(true)}
            className={`py-3 px-4 border-1 border-gray-200 rounded-l-2xl border-r-0 ${
              toggle === true && "bg-[#E7FE29]"
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`py-3 px-4 border-1 border-gray-200 rounded-r-2xl border-l-0 ${
              toggle === false && "bg-[#E7FE29]"
            }`}
          >
            Selected <span>({purchasedPlayer.length})</span>
          </button>
        </div>
      </div>

      {toggle == true ? (
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <AvailablePlayers
            setAvailableBalance={setAvailableBalance}
            availableBalance={availableBalance}
            playersPromise={playersPromise}
            purchasedPlayer={purchasedPlayer}
            setPurchasedPlayer={setPurchasedPlayer}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers
          removePlayer={removePlayer}
          purchasedPlayer={purchasedPlayer}
        ></SelectedPlayers>
      )}
      <ToastContainer />
    </>
  );
}

export default App;
