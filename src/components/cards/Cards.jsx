import { useState } from "react";
import PlayerCard from "../card/PlayerCard";
import Selected from "../selected/Selected";
import { Button } from "../ui/button";

function Cards({ players }) {
  const [isSelectedOpen, setIsSelectedOpen] = useState(false);

  return (
    <div className="mt-20 container px-4 mb-64">
      <div className="flex justify-between items-center my-6">
        <h2 className="text-xl font-bold">Available Players</h2>
        <div>
          <Button
            onClick={() => setIsSelectedOpen(false)}
            className={`rounded-l-md rounded-r-none ${
              isSelectedOpen ? "bg-transparent" : "bg-[#E7FE29]"
            } hover:bg-[#e7fe29] text-black`}
          >
            Available
          </Button>
          <Button
            onClick={() => setIsSelectedOpen(true)}
            className={`rounded-l-none  rounded-r-md ${
              isSelectedOpen ? "bg-[#E7FE29]" : "bg-transparent"
            } hover:bg-[#e7fe29] text-black/60"`}
          >
            Selected <span>(0)</span>
          </Button>
        </div>
      </div>
      {isSelectedOpen ? (
        <Selected />
      ) : (
        <div className="grid grid-cols-3 gap-3 ">
          {players.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Cards;
