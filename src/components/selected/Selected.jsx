import SelectedPlayer from "./SelectedPlayer";

function Selected({ selectedPlayer, handlePlayerRemove }) {
  return (
    <div className="flex flex-col gap-6 container">
      {selectedPlayer.map((player) => (
        <SelectedPlayer
          player={player}
          key={player.id}
          handlePlayerRemove={handlePlayerRemove}
        />
      ))}
    </div>
  );
}

export default Selected;
