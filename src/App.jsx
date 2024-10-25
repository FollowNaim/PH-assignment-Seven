import { useEffect, useState } from "react";
import Cards from "./components/cards/Cards";
import Footer from "./components/footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [coin, setCoin] = useState(0);
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState([]);
  useEffect(() => {
    fetch("data2.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
    console.log(players);
  }, []);
  const handleCoin = (number) => {
    setCoin(coin + number);
  };
  const handPlayerAdd = (player) => {
    const playerPrice = +player.price.split(",").join("");
    if (playerPrice > coin) {
      alert("not enough balance");
      return;
    }

    for (const p of selectedPlayer) {
      if (p.id === player.id) {
        alert("player already exist");
        return;
      }
    }
    if (selectedPlayer.length >= 3) {
      alert("limit execced");
      return;
    }
    setCoin(coin - playerPrice);
    setSelectedPlayer([...selectedPlayer, player]);
    console.log(selectedPlayer);
  };
  const handlePlayerRemove = (id) => {
    setSelectedPlayer(selectedPlayer.filter((p) => p.id !== id));
  };
  return (
    <div className="font-sora">
      <Navbar coin={coin} />
      <Hero handleCoin={handleCoin} />
      <Cards
        players={players}
        handPlayerAdd={handPlayerAdd}
        selectedLength={selectedPlayer.length}
        selectedPlayer={selectedPlayer}
        handlePlayerRemove={handlePlayerRemove}
      />
      {/* <NewsLetter /> */}
      <Footer />
    </div>
  );
}

export default App;
