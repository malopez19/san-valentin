import ValentineCard from "./components/ValentineCard";
import SliderComponent from "./components/SliderComponent";
import { useState, useEffect } from "react";
import VintageLetter from "./components/VintageLetter";
import ReactConfetti from "react-confetti";

function App() {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(true);

  const setCardOpen = () => {
    setIsCardOpen(true);
  };

  useEffect(() => {
    if (isCardOpen) {
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 8000); // Cancela el confetti después de 8 segundos

      return () => clearTimeout(timer);
    }
  }, [isCardOpen]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100">
      <div className="min-h-screen flex items-center justify-center p-2">
        <div className="text-center">
          <div className="max-w-4xl w-full mx-auto">
            {!isCardOpen ? (
              <>
                <h1 className="text-4xl font-light text-red-400 mb-12">
                  Feliz San Valentin mi <a className="underline decoration-red-400 uppercase">Morenita ❤</a> 
                </h1>
                <div className="flex flex-col items-center justify-center hover:cursor-pointer">
                  <ValentineCard setCardOpen={setCardOpen} />
                </div>
              </>
            ) : (
              <div className="animate-fade-in space-y-8">
                {showConfetti && <ReactConfetti />}
                <VintageLetter />
                <SliderComponent />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
