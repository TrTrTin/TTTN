import React from "react";

const ComponentsGioiThieu = ({
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

  vision,
  mission,

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
              background: boxBgColor,
              padding: "25px",
              borderRadius: "18px",
              color: boxTextColor,
              lineHeight: 1.8
            }}
          >
            <div>{vision}</div>

            <br />

            <div>{mission}</div>
          </div>
        </div>
      </div>

      {/* Hàng 3 */}
      <div
        style={{
          marginTop: "70px",
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
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
              {item.value}
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

export default ComponentsGioiThieu;