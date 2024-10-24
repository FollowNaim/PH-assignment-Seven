import bannerMain from "@/assets/banner-main.png";
import banner from "@/assets/bg-shadow.png";
import { Button } from "../ui/button";
function Hero({ handleCoin }) {
  return (
    <div>
      <div className="container px-4 mt-4">
        <div
          className="bg-black flex flex-col justify-center items-center text-white py-12 rounded-md "
          style={{ backgroundImage: `url(${banner})` }}
        >
          <img src={bannerMain} alt="" />
          <h1 className="text-3xl font-bold mt-6">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="text-white/70 mt-4">Beyond Boundaries Beyond Limits</p>

          <Button
            onClick={() => handleCoin(66000)}
            className="mt-6 bg-[#E7FE29] text-black hover:text-white"
          >
            Claim your free credit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
