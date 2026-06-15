import React from "react";

const ComponentCarousel = ({
  title,

  backgroundColor,

  titleColor,

  titleSize,

  speed,

  images = []
}) => {
  return (
    <section
      style={{
        width: "100%",
        background: backgroundColor,
        padding: "80px 0",
        overflow: "hidden"
      }}
    >
      {/* TEXT */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "60px"
        }}
      >
        <h2
          style={{
            color: titleColor,
            fontSize: `${titleSize}px`,
            marginBottom: "16px"
          }}
        >
          {title}
        </h2>

      </div>

      {/* CAROUSEL */}
      <div
        style={{
          width: "100%",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            display: "flex",
            width: "max-content",
            animation: `scroll ${speed}s linear infinite`
          }}
        >
          {[...images, ...images].map((image, index) => (
            <div
              key={index}
              style={{
                flexShrink: 0,
                marginRight: "24px"
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                style={{
                  width: "160px",
                  height: "110px",
                  objectFit: "cover",
                  borderRadius: "16px",
                  display: "block"
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes scroll {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </section>
  );
};

export default ComponentCarousel;