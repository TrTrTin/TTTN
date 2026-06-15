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
    <div
      style={{
        minHeight: '600px'
      }}
    >


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
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "48px", // tăng khoảng cách giữa các card
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="shadow-lg"
              style={{
                width: "320px",
                height: "170px",

                background: `linear-gradient(180deg, ${card.cardGradientFrom}, ${card.cardGradientTo})`,

                borderTopLeftRadius: `${card.radiusTL || 80}px`,
                borderTopRightRadius: `${card.radiusTR || 0}px`,
                borderBottomRightRadius: `${card.radiusBR || 80}px`,
                borderBottomLeftRadius: `${card.radiusBL || 0}px`,

                padding: "20px 15px",

                display: "flex",
                flexDirection: "column",
                alignItems: "center",

                flex: "0 0 320px", // khóa kích thước card
              }}
            >
              {/* ICON */}
              <div className="mb-6">
                <img
                  src={card.icon}
                  alt=""
                  style={{
                    width: `${card.iconSize || 60}px`,
                    height: `${card.iconSize || 60}px`,
                    objectFit: "contain"
                  }}
                />
              </div>

              {/* TITLE */}
              <div
                style={{
                  color: card.titleColor,
                  fontSize: `${card.titleSize}px`,
                  fontWeight: 700,
                  textAlign: "center",
                }}
              >
                {card.title}
              </div>

              {/* DESCRIPTION */}
              <div
                style={{
                  color: card.descriptionColor,
                  fontSize: `${card.descriptionSize}px`,
                  textAlign: "center",
                  marginTop: "16px",
                  flex: 1,
                  overflow: "hidden",
                }}
              >
                <AdminText content={card.description} />
              </div>

              {/* BUTTON */}
              <div
                style={{
                  marginTop: "auto",
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
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
                        : "16px",
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

    </div>
  );
};

export default Components2;