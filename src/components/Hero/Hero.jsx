import bannerMain from "@/assets/banner-main.png";
import banner from "@/assets/bg-shadow.png";
import { Button } from "../ui/button";
function Hero({ handleCoin }) {
  return (
    <div>
      <div className="container mt-4 px-4">
        <div
          className="bg-black flex flex-col justify-center items-center text-white py-12  bg-no-repeat bg-cover text-center rounded-md"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <img src={bannerMain} alt="" />
          <h1 className="text-3xl font-bold mt-6">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="text-white/70 mt-4">Beyond Boundaries Beyond Limits</p>

          <div className="rounded-lg border border-[#e7fe29] p-2 mt-6">
            <button
              className="px-6 rounded-lg py-2 bg-[#E7FE29] font-semibold text-black hover:bg-[#cee12a] transform transition-transform duration-150 ease-in-out active:scale-90"
              onClick={() => handleCoin(6600000)}
            >
              Claim free credit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
