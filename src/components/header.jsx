import { ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-transparent absolute w-full z-10">
      <div className="text-2xl font-bold text-black flex items-center">
        <div className="mr-2">
          <img
            src="/logo.png"
            alt="onefitnet"
            className="w-20 h-10 object-contain ml-3"
          />
        </div>
      </div>

      <nav className="space-x-8 text-white font-semibold">
        <a href="#home">HOME</a>
        <a href="#bicycles">BICYCLES</a>
        <a href="#accessories">ACCESSORIES</a>
        <a href="#about">ABOUT US</a>
        <a href="#contact">CONTACT</a>
      </nav>

      <div className="relative text-white flex items-center">
        <span className="mr-2 font-bold">$0.00</span>
        <ShoppingCart size={24} />

        <span className="absolute top-0 right-0 translate-x-2 -translate-y-2 bg-white text-black font-semibold rounded-full w-5 h-5 flex items-center justify-center text-xs">
          0
        </span>
      </div>
    </header>
  );
};

export default Header;
