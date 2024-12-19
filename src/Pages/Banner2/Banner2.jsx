

import React from "react";
import Slider from "react-slick";
import "./Banner.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Banner2 = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        pauseOnHover: false, // Ensures autoplay doesn't pause on hover
        pauseOnFocus: false, // Ensures autoplay doesn't pause on focus
      };

  const slides = [
    {
      image: "https://i.ibb.co.com/2g4fGbW/Eiffel-Tower-at-Dawn.jpg", 
      text: "Experience the best of Paris 2024 Olympic Games",
      button: "Read more",
    },
    {
      image: "https://i.ibb.co.com/7KX12B6/Racing-Cyclists-Reflections-of-Determination-and-Speed.jpg",
      text: "Questions about tickets? Check our FAQ",
      button: "Learn more",
    },
    {
      image: "https://i.ibb.co.com/H4JpDHQ/Sprinters-Synchrony-on-a-Sunlit-Track-1.jpg",
      text: "Don't miss the action! Get your tickets now",
      button: "Find out more",
    },
  ];

  return (
    <div className="banner-section">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="banner-slide">
            <img src={slide.image} alt={`Slide ${index + 1}`} className="banner-image opacity-90" />
            <div className="banner-content">
              <h2 className="text-3xl font-extrabold bg-slate-400 bg-opacity-20">{slide.text}</h2>
              <button className="banner-button rounded-xl font-semibold">{slide.button}</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner2;
