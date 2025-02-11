// src/Carta.js
import { useState } from "react";
import { Heart } from "lucide-react";

const ValentineCard = ({ setCardOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    if (!isOpening) {
      setIsOpening(true);
      setTimeout(() => {
        setCardOpen();
      }, 1000);
    }
  };

  return (
    <div
      className={'relative w-[300px] h-[400px] cursor-pointer transition-all duration-1000 transform animate-slow-bounce'} onClick={handleClick}
      >
      <div className="absolute inset-0 bg-gradient-to-br from-pink-300 to-pink-400 rounded-xl shadow-xl border border-white/20 backdrop-blur-sm">
        <div className="absolute inset-0 flex items-center justify-center">
          <Heart className="w-16 h-16 text-white animate-pulse" />
        </div>
        <div className="absolute bottom-8 left-0 right-0 text-center text-white font-light">
          <p className="text-sm mb-2">Toca para abrir</p>
          <div className="w-12 h-1 bg-white/30 mx-auto rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default ValentineCard;
