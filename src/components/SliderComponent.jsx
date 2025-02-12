// src/Slider.js
import { useState, useEffect } from "react";
import { IMGS } from "../constants/index.js";

const SliderComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % IMGS.length);
    }, 3000); // Cambia la imagen cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-container") {
      closeModal();
    }
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-1 gap-4 w-72 h-1/3 sm:w-96 mx-auto">
        {IMGS.map((image, index) => (
          <div
            key={index}
            className={`cursor-pointer ${index === currentIndex ? 'block' : 'hidden'} justify-center items-center`}
          >
            <img
              src={image.img}
              alt={`Project ${index + 1}`}
              className="w-full h-auto"
              onClick={() => handleImageClick(image.img)}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          id="modal-container"
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={handleOutsideClick}
        >
          <div className="relative d-content-center">
            <button
              onClick={closeModal}
              className="absolute right-0 top-0 text-white text-2xl p-2"
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="w-56 md:w-1/3"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SliderComponent;
