import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cards from "./components/cards/Cards";
import Footer from "./components/footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [coin, setCoin] = useState(0);
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
    console.log(players);
  }, []);
  const handleCoin = (number) => {
    setCoin(coin + number);
    toast.success("Balance updated succesfully", {
      position: "top-center",
    });
  };
  const handPlayerAdd = (player) => {
    const playerPrice = +player.price.split(",").join("");
    if (playerPrice > coin) {
      toast.error(
        "You don't have enough credit to buy. please claim free credit first!",
        {
          position: "top-center",
        }
      );
      return;
    }

    for (const p of selectedPlayer) {
      if (p.id === player.id) {
        toast.error("Player already added!", {
          position: "top-left",
        });
        return;
      }
    }
    if (selectedPlayer.length >= 6) {
      toast.error("Your basket is full!", {
        position: "top-left",
      });
      return;
    }
    setCoin(coin - playerPrice);
    setSelectedPlayer([...selectedPlayer, player]);
    toast.success(`Successfully added ${player.player_name}`, {
      position: "top-left",
    });
  };
  const handlePlayerRemove = (id, name) => {
    setSelectedPlayer(selectedPlayer.filter((p) => p.id !== id));
    toast.success(`Successfully Removed ${name}`, {
      position: "top-left",
    });
  };
  return (
    <div className="font-sora">
      <Navbar coin={coin} />
      <main>
        <Hero handleCoin={handleCoin} />
        <Cards
          players={players}
          handPlayerAdd={handPlayerAdd}
          selectedLength={selectedPlayer.length}
          selectedPlayer={selectedPlayer}
          handlePlayerRemove={handlePlayerRemove}
        />
      </main>
      {/* <NewsLetter /> */}
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
    </div>
  );
}

export default App;
