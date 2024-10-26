import bg from "@/assets/bg-shadow.png";
import { Input } from "../ui/input";
function NewsLetter() {
  return (
    <div className="container z-30 absolute left-1/2 -translate-x-1/2 transform -top-20 mt-10">
      <div
        className="w-4/5 mx-auto bg-white flex flex-col justify-center items-center border rounded-md py-14 text-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h2 className="font-bold text-2xl">Subscribe to our Newsletter</h2>
        <p className="mt-4 mb-6 text-black/70">
          Get the latest updates and news right in your inbox!
        </p>
        <div>
          <Input placeholder="enter your email" />
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
