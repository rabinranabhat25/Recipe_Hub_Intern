import React, { useState } from 'react';
import banner1 from '../assets/banner1.png';


const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    { id: 1, image: banner1, alt: "Slide 1" },
    { id: 2, image: banner1, alt: "Slide 2" },
    { id: 3, image: banner1, alt: "Slide 3" },
    
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="max-w-[1400px] mx-auto relative max-h-[1000px] overflow-hidden rounded-3xl mt-10 ">
      {/* Carousel Wrapper */}
      <div className="relative h-72 rounded-lg sm:h-72 xl:h-96 2xl:h-">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
                       
            <div
              key={slide.id}
              className="flex-shrink-0 w-auto  "
              style={{ width: "100%" }}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-[58vh] object-fit "
              />
            </div>
            

          ))}
        </div>
      </div>

      {/* Slider Controls */}
      <button
        type="button"
        onClick={handlePrev}
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-gray-800/30 group-hover:bg-gray-800/60">
          <svg
            className="w-5 h-5 text-white sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns=""
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </span>
      </button>
      <button
        type="button"
        onClick={handleNext}
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-gray-800/30 group-hover:bg-gray-800/60">
          <svg
            className="w-5 h-5 text-white sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns=""
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </span>
      </button>
    </div>
  );
};

export default Slider;
