import React, { useState } from "react";

const ComponentHeader = ({
  logo,

  title,
  subtitle,

  menu1,
  menu2,
  menu3,
  menu4,
  menu5,
  menu6,

  viText,
  enText,

  backgroundColor,
  textColor,
  menuColor,

  buttonColor,
  buttonTextColor,

  height
}) => {
    const [hoveredMenu, setHoveredMenu] = useState(null);
  return (
    <header
      style={{
        width: "100%",
        height: `${height}px`,
        background: backgroundColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 40px",
        boxSizing: "border-box",
        borderBottom: "1px solid #e5e7eb"
      }}
    >
      {/* LEFT */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px"
        }}
      >
        {logo && (
          <img
            src={logo}
            alt="Logo"
            style={{
              width: "70px",
              height: "70px",
              objectFit: "contain"
            }}
          />
        )}

        <div
          style={{
            display: "flex",
            flexDirection: "column"
          }}
        >
          <div
            style={{
              color: textColor,
              fontSize: "18px",
              fontWeight: "700",
              lineHeight: 1.3
            }}
          >
            {title}
          </div>

          <div
            style={{
              color: textColor,
              fontSize: "14px",
              lineHeight: 1.3
            }}
          >
            {subtitle}
          </div>
        </div>
      </div>

      {/* CENTER */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px"
        }}
      >
        {[
            menu1,
            menu2,
            menu3,
            menu4,
            menu5,
            menu6
            ].map((item, index) => (
            <a
                key={index}
                href="#"
                onMouseEnter={() => setHoveredMenu(index)}
                onMouseLeave={() => setHoveredMenu(null)}
                style={{
                textDecoration: "none",
                color:
                    hoveredMenu === index
                    ? "#FFD700"
                    : menuColor,
                fontSize: "20px",
                fontWeight: "500",
                transition: "all 0.3s ease"
                }}
            >
                {item}
            </a>
            ))}
      </nav>

      {/* RIGHT */}
      <div
        style={{
          display: "flex",
          gap: "8px"
        }}
      >
        <button
          style={{
            padding: "8px 12px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            background: buttonColor,
            color: buttonTextColor,
            fontWeight: "600"
          }}
        >
          {viText}
        </button>

        <button
          style={{
            padding: "8px 12px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            background: buttonColor,
            color: buttonTextColor,
            fontWeight: "600"
          }}
        >
          {enText}
        </button>
      </div>
    </header>
  );
};

export default ComponentHeader;