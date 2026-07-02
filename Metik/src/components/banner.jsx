import React, { useEffect, useState } from "react";

const Banner = ({ images = [], autoPlay = true, delay = 3000 }) => {
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) {
    return <div style={styles.empty}>No images</div>;
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrent((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, delay);

    return () => clearInterval(timer);
  }, [autoPlay, delay, images.length]);

  return (
    <div style={styles.wrapper}>
      {/* Slider */}
      <div style={styles.slider}>
        <img
          src={images[current]}
          alt={`slide-${current}`}
          style={styles.image}
        />

        {/* arrows */}
        <button onClick={prevSlide} style={{ ...styles.arrow, left: 10 }}>
          ‹
        </button>

        <button onClick={nextSlide} style={{ ...styles.arrow, right: 10 }}>
          ›
        </button>

        {/* 🔥 DOTS INSIDE BANNER */}
        <div style={styles.dotsOverlay}>
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              style={{
                ...styles.dot,
                opacity: current === index ? 1 : 0.4,
                transform: current === index ? "scale(1.3)" : "scale(1)",
                background: current === index ? "#fff" : "rgba(255,255,255,0.6)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;

/* ========== STYLE ========== */
const styles = {
  wrapper: {
    width: "100%",
    position: "relative",
    overflow: "hidden",
  },

  slider: {
    position: "relative",
    width: "100%",
    height: "450px",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  arrow: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    background: "rgba(0,0,0,0.4)",
    color: "#fff",
    border: "none",
    fontSize: "28px",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },

  /* 🔥 DOTS OVERLAY */
  dotsOverlay: {
    position: "absolute",
    bottom: "15px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "8px",
    padding: "6px 12px",
    borderRadius: "20px",
    background: "rgba(0,0,0,0.35)",
    backdropFilter: "blur(6px)",
  },

  dot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    cursor: "pointer",
    transition: "0.2s",
  },

  empty: {
    padding: "40px",
    textAlign: "center",
    color: "#999",
  },
};