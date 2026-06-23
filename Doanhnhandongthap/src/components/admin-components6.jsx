import React from "react";

const Components6 = ({
  title,
  titleColor,
  moreText,
  moreLink,
  cards = []
}) => {
  return (

    <div
      style={{
        width: "100%",
        padding: "80px 120px",
        background:
          "linear-gradient(to bottom right,#d9f4ff,#f5d4ff)",
        position: "relative"
      }}
    >

      
      {/* Hàng 1 */}
      
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "40%",
          marginBottom: "50px"
        }}
      >
        <h2
          style={{
            color: titleColor,
            fontSize: "28px",
            fontWeight: "700"
          }}
        >
          {title}
        </h2>

        <a
  href={moreLink}
  style={{
    color: "#010101",
    textDecoration: "none",
    fontWeight: "600",
    position: "relative",
    zIndex: 10
  }}
>
  {moreText || "Xem thêm"} →
</a>
      </div>

      {/* Hàng 2 */}
      <div
        style={{
          position: "relative",
          width: "650px",
          height: "550px"
        }}
      >
        {cards.map((card, index) => {
          const positions = [
            {
              top: 0,
              left: 0
            },
            {
              top: -60,
              left: 270
            },
            {
              top: 250,
              left: 120
            }
          ];

          return (
            <div
              key={index}
              style={{
                position: "absolute",
                top: positions[index]?.top,
                left: positions[index]?.left,
                width: "200px",
                minHeight: "260px",
                padding: "20px",
                borderRadius: `
                  ${card.radiusTL}px
                  ${card.radiusTR}px
                  ${card.radiusBR}px
                  ${card.radiusBL}px
                  `,
                background: "rgba(255,255,255,0.35)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.4)",
                transition: ".4s",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  margin: "auto",
                  borderRadius: "50%",
                  background: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <img
                  src={card.image}
                  style={{
                    width: "60px",
                    height: "60px",
                    objectFit: "contain"
                  }}
                />
              </div>

              <h3
                style={{
                  textAlign: "center",
                  color: "#0056a6",
                  marginTop: "25px"
                }}
              >
                {card.title}
              </h3>

              <p
                style={{
                  textAlign: "center",
                  color: "#36516d",
                  lineHeight: "28px"
                }}
              >
                {card.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Components6;