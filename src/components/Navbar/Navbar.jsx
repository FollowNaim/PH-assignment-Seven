import Dollar from "@/assets/DoubleDollar.png";
import { AlignRight, X } from "lucide-react";
import { useState } from "react";
import Logo from "../../assets/logo.png";
import { Button } from "../ui/button";
function Navbar({ coin }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sticky top-0 bg-white/70 w-full backdrop-blur-lg z-50">
      <div className="container px-4 pt-3 flex justify-between items-center">
        <div>
          <img className="w-14" src={Logo} alt="" />
        </div>
        <div className="flex items-center gap-8">
          <div className="hidden md:block">
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
          <div
            className="block md:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <AlignRight />
          </div>
        </div>
      </div>
      <div
        className={`absolute block md:hidden z-50 bg-lime-50 top-0 w-4/5 h-screen transition-position duration-300 ease-in-out cursor-pointer ${
          isOpen ? "right-0" : "-right-full"
        }`}
      >
        <div
          className="w-full flex justify-end pt-7 px-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          <X />
        </div>
        <ul className="flex flex-col items-center gap-8 text-black/70">
          <li>Home</li>
          <li>Fixtures</li>
          <li>Teams</li>
          <li>Schedule</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
