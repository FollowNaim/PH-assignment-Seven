import Dollar from "@/assets/DoubleDollar.png";
import Logo from "../../assets/logo.png";
import { Button } from "../ui/button";
function Navbar({ coin }) {
  return (
    <div>
      <div className="container px-4 pt-3 flex justify-between items-center">
        <div>
          <img className="w-14" src={Logo} alt="" />
        </div>
        <div className="flex items-center gap-8">
          <div>
            <ul className="flex items-center gap-8 text-black/70">
              <li>Home</li>
              <li>Fixtures</li>
              <li>Teams</li>
              <li>Schedule</li>
            </ul>
          </div>
          <div>
            <Button variant="outline">
              {coin} Coin <img className="w-5" src={Dollar} alt="" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
