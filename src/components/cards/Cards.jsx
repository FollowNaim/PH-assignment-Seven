import { useState } from "react";
import PlayerCard from "../card/PlayerCard";
import Selected from "../selected/Selected";
import { Button } from "../ui/button";

function Cards({
  players,
  handPlayerAdd,
  selectedLength,
  selectedPlayer,
  handlePlayerRemove,
}) {
  const [isSelectedOpen, setIsSelectedOpen] = useState(false);

  return (
    <div className="mt-20 container px-4 mb-64">
      <h2 className="text-xl w-fit flex font-bold flex-1">
        {isSelectedOpen
          ? `Selected Players (${selectedPlayer.length}/6)`
          : "Available Players"}
      </h2>

      <div className="flex w-fit mt-7 md:mt0 md:-mt-10 mb-10 ml-auto justify-end sticky top-20 h-fit z-20">
        <Button
          onClick={() => setIsSelectedOpen(false)}
          className={`rounded-l-md rounded-r-none ${
            isSelectedOpen ? "bg-white" : "bg-[#E7FE29]"
          } hover:bg-[#e7fe29] text-black`}
        >
          Available
        </Button>
        <Button
          onClick={() => setIsSelectedOpen(true)}
          className={`rounded-l-none  rounded-r-md ${
            isSelectedOpen ? "bg-[#E7FE29]" : "bg-white"
          } hover:bg-[#e7fe29] text-black/60"`}
        >
          Selected <span>({selectedLength})</span>
        </Button>
      </div>
      {isSelectedOpen ? (
        <Selected
          selectedPlayer={selectedPlayer}
          handlePlayerRemove={handlePlayerRemove}
          setIsSelectedOpen={setIsSelectedOpen}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
          {players.map((player) => (
            <PlayerCard
              handPlayerAdd={handPlayerAdd}
              key={player.id}
              player={player}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Cards;
