import { CircleStop } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-screen bg-black"
      style={{
        backgroundImage: "url(/herosectionbike.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 flex">
        <div className="flex-1 bg-black opacity-50"></div>
        <div className="flex-1 bg-red-700 opacity-70"></div>
      </div>

      <div className="absolute inset-0 flex">
        <div className="flex-1 text-white p-5 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mt-20 ml-4 italic mb-3">
            Newly Launched
          </h2>
          <h1 className="text-7xl font-extrabold mt-3 font-['Roboto'] italic mb-8">
            Kryo X26 <br />
            <span className="mt-4 block">MTB</span>
          </h1>
          <p className="mb-4 text-lg font-extrabold font-['Playfair Display'] italic">
            Specifications:
          </p>
          <ul className="mb-8 space-y-2 text-sm font-bold font-['Playfair Display']">
            <li className="flex items-center">
              <CircleStop size={15} className="mr-2" /> Lightweight 18&quot;
              Frame
            </li>
            <li className="flex items-center">
              <CircleStop size={15} className="mr-2" /> Steel Suspension Fork
            </li>
            <li className="flex items-center">
              <CircleStop size={15} className="mr-2" /> Steel Hardtail Frame
            </li>
          </ul>
          <Button className="bg-red-500 hover:bg-red-600 w-28 mb-7 p-6 text-lg font-bold">
            Buy Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
