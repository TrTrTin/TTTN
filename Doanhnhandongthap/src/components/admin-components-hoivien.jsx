import React from "react";
import AnimatedCounter from "./animated-counter";
const ComponentsHoiVien = ({
  title,
  titleColor,
  titleSize,

  image,

  heading,
  headingColor,
  headingSize,

  subtitle1,
  subtitle2,
  subtitleColor,
  subtitleSize,

  boxTitle,
    benefits = [],

  boxBgColor,
  boxTextColor,

  cards = [],
  valueSize,
  labelSize
}) => {
  return (
    <div
      style={{
        padding: "80px 20px",
        background: "transparent",
        maxWidth: "1200px",
        margin: "0 auto"
      }}
    >
      {/* Hàng 1 */}
      <div
        style={{
          textAlign: "center",
          color: titleColor,
          fontSize: `${titleSize}px`,
          fontWeight: 700,
          marginBottom: 60
        }}
      >
        {title}
      </div>

      {/* Hàng 2 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "50px",
          alignItems: "center"
        }}
      >
        {/* trái */}
        <div>
          <img
            src={image}
            alt=""
            style={{
              width: "100%",
              borderRadius: "20px",
              objectFit: "cover"
            }}
          />
        </div>

        {/* phải */}
        <div>
          {/* hàng nhỏ 1 */}
          <div
            style={{
              color: headingColor,
              fontSize: `${headingSize}px`,
              fontWeight: 700,
              marginBottom: 30
            }}
          >
            {heading}
          </div>

          {/* hàng nhỏ 2 */}
          <div
            style={{
              color: subtitleColor,
              fontSize: `${subtitleSize}px`,
              lineHeight: 1.8,
              marginBottom: 30,
              whiteSpace: "pre-line"
            }}
          >
            {subtitle1}

            <br />
            <br />

            {subtitle2}
          </div>

          {/* hàng nhỏ 3 */}
          <div
  style={{
    background: "#f3f4f6",
    borderRadius: "20px",
    padding: "25px"
  }}
>
  <div
    style={{
      color: "#1f4b89",
      fontWeight: 700,
      fontSize: "28px",
      marginBottom: "20px"
    }}
  >
    {boxTitle}
  </div>

  {benefits.map((item, index) => (
    <div
      key={index}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "15px 0",
        borderBottom:
          index !== benefits.length - 1
            ? "1px solid #ddd"
            : "none"
      }}
    >
      <div
        style={{
          color: "#f59e0b",
          fontWeight: "700"
        }}
      >
        {item.icon}
      </div>

      <div>
        {item.text}
      </div>
    </div>
  ))}
</div>
        </div>
      </div>

      {/* Hàng 3 */}
      <div
        style={{
          marginTop: "70px",
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "25px"
        }}
      >
        {cards.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              borderRadius: "20px",
              padding: "40px 20px",
              textAlign: "center",
              boxShadow: "0 5px 20px rgba(0,0,0,.08)"
            }}
          >
            <div
              style={{
                color: "#1f4b89",
                fontWeight: 700,
                fontSize: `${valueSize}px`
              }}
            >
              <AnimatedCounter value={item.value} />
            </div>

            <div
              style={{
                marginTop: 15,
                color: "#444",
                fontSize: `${labelSize}px`
              }}
            >
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComponentsHoiVien;