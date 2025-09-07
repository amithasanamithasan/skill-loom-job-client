import React, { useRef, useEffect } from "react";
import Flicking, { useFlickingReactiveAPI } from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "./style.css";


const banners = [
  "/banners/banner1.jpg",
  "/banners/banner2.jpg",
  "/banners/banner3.jpg",
  "/banners/banner4.jpg",
  "/banners/banner5.jpg",
];

export default function Carsoule() {
  const flickingRef = useRef();
  const { indexProgress } = useFlickingReactiveAPI(flickingRef);
  const length = banners.length;

  // Autoplay every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      flickingRef.current?.moveTo(flickingRef.current.getIndex() + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Flicking
      ref={flickingRef}
      circular={true}
      className="flicking-viewport"
      align="center"
      horizontal={true}
    >
      {banners.map((banner, index) => {
        const childProgress =
          ((index - indexProgress + length * 1.5) % length) - length * 0.5;
        const scale = Math.max(0.7, 1 - Math.abs(childProgress) * 0.3);
        const rotate = -childProgress * 25;
        const zIndex = Math.round((1 - Math.abs(childProgress)) * 10);
        const opacity = Math.max(0.5, 1 - Math.abs(childProgress) * 0.5);

        return (
          <div
            key={index}
            className="flicking-panel"
            style={{
              transformOrigin: `${50 - childProgress * 30}% 50%`,
              transform: `rotateY(${rotate}deg) scale(${scale})`,
              zIndex,
              opacity,
              backgroundImage: `url(${banner})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="panel-text">
              {`Banner ${index + 1} - Your Catchy Slogan`}
            </div>
          </div>
        );
      })}
    </Flicking>
  );
}
