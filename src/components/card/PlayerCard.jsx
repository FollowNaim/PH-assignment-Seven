import flag from "@/assets/flag.png";
import user1 from "@/assets/user1.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";

function PlayerCard({ player, handPlayerAdd }) {
  const {
    id,
    player_name,
    country,
    batting_style,
    role,
    price,
    rating,
    player_img,
  } = player;
  return (
    <div>
      <Card className="shadow-sm">
        <CardHeader className="p-4 md:p-6">
          <img
            className="rounded-xl w-full h-56 md:h-56  object-cover"
            src={player_img}
            alt=""
          />
          <CardTitle className="flex items-center gap-4 py-4">
            <span>
              <img className="w-6" src={user1} alt="" />
            </span>{" "}
            <h2 className="font-semibold text-lg">{player_name}</h2>
          </CardTitle>
          <CardDescription className="border-b pb-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <span>
                  <img className="w-5" src={flag} alt="" />
                </span>{" "}
                <h2 className="">{country}</h2>
              </div>
              <div>
                <span className="bg-black/5 px-4 py-2 text-black rounded-md">
                  {role}
                </span>
              </div>
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4 md:p-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">Rating</h4>
              <span>{rating}</span>
            </div>
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">Batting Position</h4>
              <p className="text-black/70">{batting_style}</p>
            </div>
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">
                Price :{" "}
                <span className="ml-1 font-medium text-black/90">${price}</span>
              </h4>
              <Button
                onClick={() => handPlayerAdd(player)}
                variant="outline"
                className="hover:bg-[#E7FE29]"
              >
                Choose Player
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default PlayerCard;
