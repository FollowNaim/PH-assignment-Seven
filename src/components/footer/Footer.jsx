import bg from "@/assets/bg-shadow.png";
import logo from "@/assets/logo-footer.png";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
function Footer() {
  return (
    <>
      <footer className="bg-[#06091A] relative">
        <div className="container px-4 pb-10 pt-60 md:pt-44 flex flex-col justify-center items-center">
          <div className="flex justify-start w-full md:justify-center">
            <img className="w-20" src={logo} alt="" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 mt-12 justify-center items-center gap-8 md:gap-0 text-white text-left">
            <div className="md:col-span-2">
              <h2>About us</h2>
              <p className="text-white/60 w-4/5 mt-4">
                Where Passion Meets the Pitch – Bringing You Closer to the
                Thrills, Skills, and Spirit of the Bangladesh Premier League.
              </p>
            </div>
            <div className="md:col-span-1">
              <h2>Quick links</h2>
              <ul className="text-white/60 mt-4 flex flex-col gap-3 list-disc ml-2">
                <li>Home</li>
                <li>Services</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="md:col-span-2 md:max-w-64 md:mx-auto">
              <h2>Subscribe</h2>
              <p className="text-white/60 my-4">
                Subscribe to our newsletter for the latest updates.
              </p>
              <div className="flex items-center">
                <Input
                  className="bg-white rounded-l-md rounded-r-none"
                  placeholder="enter your email"
                />
                <Button className="rounded-r-md rounded-l-none bg-gradient-to-tr from-orange-300 via-yellow-300 to-rose-500 text-black font-semibold">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-5">
          <div>
            <p className="text-white/60 text-center">
              @2024 BPL-DREAM 11 All Rights Reserved.
            </p>
          </div>
        </div>
        <div className="container z-30 absolute left-1/2 -translate-x-1/2 -top-40 mt-10">
          <div className="md:w-4/5 mx-auto border rounded-lg p-3">
            <div
              className="w-full mx-auto bg-white flex flex-col justify-center items-center border rounded-lg py-14 relative before:absolute before:top-0 before:-right-32 md:before:-right-10 before:w-40 before:h-40  before:bg-yellow-200 before:blur-3xl before:rotate-45 after:absolute after:bottom-0 after:-left-32 md:after:-left-10 after:w-40 after:h-40 after:bg-blue-200 after:rotate-45 after:blur-3xl overflow-hidden text-center px-4 bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${bg})` }}
            >
              <h2 className="font-bold text-2xl">
                Subscribe to our Newsletter
              </h2>
              <p className="mt-4 mb-6 text-black/70">
                Get the latest updates and news right in your inbox!
              </p>
              <div className="flex items-center gap-2">
                <Input placeholder="enter your email" />
                <Button className="rounded-md bg-gradient-to-tr from-orange-300 via-yellow-300 to-rose-500 text-black font-semibold">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
