import { useEffect, useState } from "react";
import { bannerImages } from "../constants/constants";

const leftArrowIcon = require("../icons/icon_left_arrow.svg").default;
const rightArrowIcon = require("../icons/icon_right_arrow.svg").default;

const BannerSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % bannerImages.length;
    setCurrentImageIndex(nextIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? bannerImages.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className="w-full px-[60px] py-6">
      <div className="h-[300px] relative">
        <div
          className="h-full rounded-2xl"
          key={bannerImages[currentImageIndex].id}
          style={{
            backgroundImage: `url(${bannerImages[currentImageIndex].src})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
        <div className="absolute bottom-10 left-[100px] z-[1] flex">
          {bannerImages.map((img, index) => (
            <div
              className="h-2 mr-2 rounded-full"
              style={{
                width: currentImageIndex === index ? "24px" : "8px",

                backgroundColor: currentImageIndex === index ? "white" : "grey",
              }}
            />
          ))}
        </div>

        <div className="flex justify-between items-center absolute top-0 bottom-0 -left-[44px] -right-[44px] z-[2]">
          <div className="flex justify-center items-center rounded-full bg-light-blue w-[88px] h-[88px] border-8 border-white">
            <button onClick={previousImage}>
              <img src={leftArrowIcon} alt="arrow" />
            </button>
          </div>
          <div className="flex justify-center items-center rounded-full bg-light-blue w-[88px] h-[88px] border-8 border-white">
            <button onClick={nextImage}>
              <img src={rightArrowIcon} alt="arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
