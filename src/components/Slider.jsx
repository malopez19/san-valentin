/* // src/Slider.js
import Slider from "react-slick";

// Imágenes de ejemplo
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";

const images = [img1, img2, img3]; */

const SliderComponent = () => {
  /* const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }; */

  return (
    <div className="max-w-2xl mx-auto mt-8">
      {/* <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`imagen-${index}`}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        ))}
      </Slider> */}
      <h1>Slider</h1>
    </div>
  );
};

export default SliderComponent;
