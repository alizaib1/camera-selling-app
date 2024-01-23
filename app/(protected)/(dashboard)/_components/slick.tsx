"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slick.css";
import { useEffect, useRef, useState } from "react";

const images = [
  {
    source:
      "https://images.pexels.com/photos/3681411/pexels-photo-3681411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Little Venice in Colmar",
  },
  {
    source:
      "https://images.pexels.com/photos/1095090/pexels-photo-1095090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Back View of a Man Standing on a Rock near the Waterfalls",
  },
  {
    source:
      "https://images.pexels.com/photos/3681411/pexels-photo-3681411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Machu Pichu, Peru",
  },
  {
    source:
      "https://images.pexels.com/photos/9611659/pexels-photo-9611659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Train With Smoke",
  },
  {
    source:
      "https://images.pexels.com/photos/274973/pexels-photo-274973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Hot air ballons in the sky",
  },
  {
    source:
      "https://images.pexels.com/photos/12795927/pexels-photo-12795927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Canal Beside Houses",
  },
  {
    source:
      "https://images.pexels.com/photos/1787235/pexels-photo-1787235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title:
      "Brown Wooden House on Green Grass Field Near Green Trees and Mountains",
  },
];

const title = "React Slider";

const AppSlick = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const sliderRef = useRef<any>(null);
  const nextArrow = useRef<any>(null);

  const navigationHandle = (direction: any) => {
    let newSlideNumber;
    const totalNoofSlides = sliderRef?.current?.children.length - 1;
    direction === "left"
      ? (newSlideNumber = slideNumber === 0 ? totalNoofSlides : slideNumber - 1)
      : (newSlideNumber =
          slideNumber === totalNoofSlides ? 0 : slideNumber + 1);
    setSlideNumber(newSlideNumber);

    // adding/removing active class from slides
    Array.from(sliderRef.current.children).forEach((slide: any) =>
      slide.classList.remove("active")
    );
    sliderRef.current.children[newSlideNumber].classList.add("active");

    // setting current slide's bg image as body background image
    document.body.style.backgroundImage = `url(${images[newSlideNumber].source})`;
  };

  // autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      nextArrow.current.click();
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  // checking if no slides available
  if (images.length <= 0) {
    return "No slides available..";
  }
  return (
    <div className="_body">
      <div className="sliderWrapper">
        {/* {title && <h3 className="sliderTitle">{title}</h3>} */}
        <button className="prevArrow" onClick={() => navigationHandle("left")}>
          «
        </button>
        <div className="slider" ref={sliderRef}>
          {images.map((slide, index) => (
            <div className={`slide${index === 0 ? " active" : ""}`} key={index}>
              {slide.source && (
                <img
                  src={slide.source}
                  alt={slide.title}
                  loading="lazy"
                  draggable={false}
                />
              )}
              {slide.title && <h3>{slide.title}</h3>}
            </div>
          ))}
        </div>
        <button
          className="nextArrow"
          onClick={() => navigationHandle("right")}
          ref={nextArrow}
        >
          »
        </button>
        {/* <div className="sliderPagination">
          {slideNumber + 1} / {images.length}
        </div> */}
      </div>
    </div>
  );
};

export default AppSlick;
