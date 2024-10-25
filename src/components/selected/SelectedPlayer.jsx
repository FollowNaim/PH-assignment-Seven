import deleteImg from "@/assets/delete.png";
function SelectedPlayer({ player, handlePlayerRemove }) {
  const { player_img, batting_style, player_name } = player;
  return (
    <div className="border rounded-xl shadow-sm px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex gap-6 items-center">
          <div>
            <img
              className="w-16 h-16 object-cover rounded-full"
              src={player_img}
              alt=""
            />
          </div>
          <div>
            <h2 className="text-xl font-medium">{player_name}</h2>
            <p className="text-black/60">{batting_style}</p>
          </div>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => handlePlayerRemove(player.id)}
        >
          <img className="w-8" src={deleteImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default SelectedPlayer;
