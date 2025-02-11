import ValentineCard from "./components/ValentineCard";
import SliderComponent from "./components/Slider";
import { useState } from "react";

function App() {
  const [isCardOpen, setIsCardOpen] = useState(false);

  const setCardOpen = () => {
    setIsCardOpen(true);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100">
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <div className="max-w-4xl w-full mx-auto">
            {!isCardOpen ? (
              <div className="flex flex-col items-center justify-center">
                <ValentineCard setCardOpen={setCardOpen} />
              </div>
            ) : (
              <div className="animate-fade-in space-y-8">
                <div className="text-center space-y-4">
                  <h1 className="text-4xl font-light text-valentine-primary">
                    Un mensaje especial para una persona especial...
                  </h1>
                  <p className="text-gray-600">
                    ...
                  </p>
                </div>
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
