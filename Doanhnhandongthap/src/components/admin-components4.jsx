import React from "react";
import AnimatedCounter from "./animated-counter";
const Components4 = ({
  title,
  titleColor,
  titleSize,

  cards = [],

  valueSize,
  labelSize
}) => {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom right,#d9f4ff,#f5d4ff)",
        padding: "60px 40px"
      }}
    >
      {/* Hàng 1 */}
      <div
        style={{
          textAlign: "center",
          fontWeight: "bold",
          color: titleColor,
          fontSize: `${titleSize}px`,
          marginBottom: "50px"
        }}
      >
        {title}
      </div>

      {/* Hàng 2 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "30px"
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              textAlign: "center",
              background: "transparent"
            }}
          >
            {/* dòng trên */}
            <div
              style={{
                fontSize: `${valueSize}px`,
                fontWeight: "700",
                color: card.valueColor
              }}
            >
              <AnimatedCounter value={card.value} />
            </div>

            {/* dòng dưới */}
            <div
              style={{
                marginTop: "8px",
                fontSize: `${labelSize}px`,
                color: card.labelColor
              }}
            >
              {card.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Components4;