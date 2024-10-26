import SelectedPlayer from "./SelectedPlayer";

function Selected({ selectedPlayer, handlePlayerRemove, setIsSelectedOpen }) {
  return (
    <div className="flex flex-col gap-6 container">
      {selectedPlayer.map((player) => (
        <SelectedPlayer
          player={player}
          key={player.id}
          handlePlayerRemove={handlePlayerRemove}
        />
      ))}
      <div>
        <div className="rounded-lg border border-black w-fit p-1 mt-6">
          <button
            className="px-4 rounded-lg py-2 bg-[#E7FE29] font-semibold text-black hover:bg-[#cee12a] transform transition-transform duration-150 ease-in-out active:scale-90"
            onClick={() => setIsSelectedOpen(false)}
          >
            Add more player
          </button>
        </div>
      </div>
    </div>
  );
}

export default Selected;
