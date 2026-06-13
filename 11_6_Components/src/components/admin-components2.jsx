import React from "react";
import AdminSection from "../components/admin-section";
import AdminText from "../components/admin-text";

const Components2 = (props) => {
  const {
    title,
    subtitle,

    titleColor,
    subtitleColor,

    titleSize,
    subtitleSize,

    gradientFrom,
    gradientTo,

    cards = []
  } = props;

  return (
    <AdminSection
      container="2xl"
      padding_x={0}
      padding_y={0}
      background={{
        type: "gradient",
        fromColor: gradientFrom,
        toColor: gradientTo,
        direction: "to bottom right"
      }}
    >
      <div className="py-20 px-6">

        {/* HEADER */}
       <div className="text-center mb-14">

        <h2
            style={{
            color: titleColor,
            fontSize: `${titleSize}px`,
            fontWeight: 700,
            textAlign: "center"
            }}
        >
            {title}
        </h2>

        <div
        className="mt-2"
        style={{
            color: subtitleColor,
            fontSize: `${subtitleSize}px`
        }}
        >
        <AdminText
            content={subtitle}
            align="center"
        />
        </div>

        </div>

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "24px"
            }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="shadow-lg"
              style={{
                background: `linear-gradient(180deg, ${card.cardGradientFrom}, ${card.cardGradientTo})`,
                minHeight: `${card.cardHeight || 300}px`,

                borderTopLeftRadius: `${card.radiusTL || 80}px`,
                borderTopRightRadius: `${card.radiusTR || 20}px`,
                borderBottomRightRadius: `${card.radiusBR || 80}px`,
                borderBottomLeftRadius: `${card.radiusBL || 20}px`,

                padding: "20px 15px"
              }}
            >
              {/* ICON */}
              <div className="flex justify-center mb-6">
                <img
                  src={card.icon}
                  alt=""
                  style={{
                    width: `${card.iconSize || 60}px`,
                    height: `${card.iconSize || 60}px`
                  }}
                />
              </div>

              {/* TITLE */}
              <div
                className="text-center font-bold"
                style={{
                  color: card.titleColor,
                  fontSize: `${card.titleSize}px`
                }}
              >
                {card.title}
              </div>

              {/* DESCRIPTION */}
              <div
                className="text-center mt-4"
                style={{
                  color: card.descriptionColor,
                  fontSize: `${card.descriptionSize}px`
                }}
              >
                <AdminText content={card.description} />
              </div>

              {/* BUTTON */}
              <div className="flex justify-center mt-8">
                <button
                  style={{
                    backgroundColor: card.buttonColor,

                    color: card.buttonTextColor,

                    borderRadius: "9999px",

                    padding:
                      card.buttonSize === "sm"
                        ? "8px 18px"
                        : card.buttonSize === "lg"
                        ? "16px 34px"
                        : "12px 28px",

                    fontSize:
                      card.buttonSize === "sm"
                        ? "14px"
                        : card.buttonSize === "lg"
                        ? "18px"
                        : "16px"
                  }}
                >
                  {card.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminSection>
  );
};

export default Components2;