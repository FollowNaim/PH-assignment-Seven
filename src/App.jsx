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
  const handPlayerAdd = (player) => {};
  return (
    <div className="font-sora">
      <Navbar coin={coin} />
      <Hero handleCoin={handleCoin} />
      <Cards players={players} />
      {/* <NewsLetter /> */}
      <Footer />
    </div>
  );
}

export default App;
