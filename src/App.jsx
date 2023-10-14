import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled, RxDot } from "react-icons/rx";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";
import Banner1 from "./assets/banner.png";
import Banner2 from "./assets/banner2.png";

const dataSlider = [
  {
    id: "1",
    imageUrl: Banner1,
    button: {
      text: "Shop Now",
      cssClasses: "text-white",
    },
    body: {
      cssClasses: "text-white",
      mainText: "Perfume Tips Tricks One",
      subText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel ante tellus.",
    },
  },
  {
    id: "2",
    imageUrl: Banner2,
    button: {
      text: "Shop Now",
      cssClasses: "text-white",
    },
    body: {
      cssClasses: "text-white",
      alignContent: "right",
      mainText: "Perfume Tips Tricks Two",
      subText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel ante tellus.",
    },
  },
  {
    id: "3",
    imageUrl:
      "https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&h=500&q=80",
    button: {
      text: "Shop Now",
      cssClasses: "text-white",
    },
    body: {
      cssClasses: "text-white",
      alignContent: "right",
      mainText: "Perfume Tips Tricks Three",
      subText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel ante tellus.",
    },
  },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevButtonHandler = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? dataSlider.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextButtonHandler = () => {
    const isLastSlide = currentIndex === dataSlider.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className="h-[780px] w-full relative">
      {/* Slider */}
      <div
        style={{ "--img-url": `url(${dataSlider[currentIndex].imageUrl})` }}
        className="bg-[image:var(--img-url)] w-full h-full bg-cover bg-center duration-500 flex items-center"
      >
        {/* body */}
        {dataSlider[currentIndex].body && (
          <div
            className={twMerge(
              "text-white flex flex-col text-center gap-6 ml-auto p-12 md:p-40 md:text-left",
              dataSlider[currentIndex].body?.cssClasses
            )}
          >
            <h2 className="text-6xl leading-[80px]">
              {dataSlider[currentIndex].body.mainText}
            </h2>
            <p>{dataSlider[currentIndex].body.subText}</p>
            <div>
              <Link
                className={twMerge(
                  "text-white border-b p-2 ",
                  dataSlider[currentIndex]?.button?.cssClasses
                )}
                to="/shop"
              >
                {dataSlider[currentIndex]?.button.text}
              </Link>
            </div>
          </div>
        )}
      </div>
      {/* Slider */}

      {/* prev button */}
      <div className="absolute p-2 text-2xl text-white -translate-y-1/2 rounded-full cursor-pointer top-1/2 -translate-x-0 left-5 bg-primary/50">
        <BsChevronCompactLeft onClick={prevButtonHandler} />
      </div>

      {/* Next Button */}
      <div className="absolute p-2 text-2xl text-white -translate-y-1/2 rounded-full cursor-pointer top-1/2 -translate-x-0 right-5 bg-primary/50">
        <BsChevronCompactRight onClick={nextButtonHandler} />
      </div>
      {/* Dots */}
      <div className="absolute flex left-1/2 bottom-2">
        {dataSlider.map((slider, slideIndex) => (
          <div
            className="text-3xl text-white cursor-pointer"
            key={slider.id}
            onClick={() => setCurrentIndex(slideIndex)}
          >
            {slideIndex === currentIndex ? (
              <RxDotFilled className="text-white" />
            ) : (
              <RxDot className="text-white" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
