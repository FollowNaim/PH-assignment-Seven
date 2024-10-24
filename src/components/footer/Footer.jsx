import bg from "@/assets/bg-shadow.png";
import logo from "@/assets/logo-footer.png";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
function Footer() {
  return (
    <>
      <div className="bg-[#06091A] relative">
        <div className="container px-4 pb-10 pt-44 flex flex-col justify-center items-center">
          <div>
            <img className="w-20" src={logo} alt="" />
          </div>
          <div className="grid grid-cols-5 mt-12 justify-center items-center  text-white text-left">
            <div className="col-span-2">
              <h2>About us</h2>
              <p className="text-white/60 w-4/5 mt-4">
                We are a passionate team dedicated to providing the best
                services to our customers.
              </p>
            </div>
            <div className="col-span-1">
              <h2>Quick links</h2>
              <ul className="text-white/60 mt-4 flex flex-col gap-3 list-disc ml-2">
                <li>Home</li>
                <li>Services</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="col-span-2 max-w-64 mx-auto">
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
              @2024 Your Company All Rights Reserved.
            </p>
          </div>
        </div>
        <div className="container z-30 absolute -top-40 mt-10">
          <div className="w-4/5 mx-auto border rounded-lg p-3">
            <div
              className="w-full mx-auto bg-white flex flex-col justify-center items-center border rounded-lg py-14 relative before:absolute before:top-0 before:-right-10 before:w-40 before:h-40  before:bg-yellow-200 before:blur-3xl before:rotate-45 after:absolute after:bottom-0 after:left-10 after:w-40 after:h-40 after:bg-blue-200 after:rotate-45 after:blur-3xl overflow-hidden"
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
      </div>
    </>
  );
}

export default Footer;