import React, { useState } from "react";



const ComponentFooter = ({
  backgroundColor,

  logo,
  title,
  subtitle,

  description1,
  description2,
  description3,

  column2Title,
  column2Links = [],

  column3Title,
  column3Links = [],

  
  copyright,

  facebookIcon,
  facebookUrl,

  tiktokIcon,
  tiktokUrl,

  youtubeIcon,
  youtubeUrl,

  textColor,
  linkColor
}) => {
    const [hoveredLink, setHoveredLink] = useState(null);
    const linkStyle = (key) => ({
  color:
    hoveredLink === key
      ? "#FFD700"
      : linkColor,
  textDecoration: "none",
  transition: "all 0.3s ease"
});
  return (
    <footer
      style={{
        background: backgroundColor,
        padding: "60px 80px 20px"
      }}
    >
      {/* HÀNG CHÍNH THỨ 1 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: "60px",
          marginBottom: "40px"
        }}
      >
        {/* CỘT 1 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px"
          }}
        >
          {/* HÀNG 1 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px"
            }}
          >
            <img
              src={logo}
              alt="logo"
              style={{
                width: "70px",
                height: "70px",
                objectFit: "contain"
              }}
            />

            <div>
              <div
                style={{
                  color: textColor,
                  fontWeight: 700,
                  fontSize: "18px"
                }}
              >
                {title}
              </div>

              <div
                style={{
                  color: textColor,
                  fontSize: "14px"
                }}
              >
                {subtitle}
              </div>
            </div>
          </div>

          {/* HÀNG 2 */}
          <div style={{ color: textColor }}>
            {description1}
          </div>

          {/* HÀNG 3 */}
          <div style={{ color: textColor }}>
            {description2}
          </div>

          {/* HÀNG 4 */}
          <div style={{ color: textColor }}>
            {description3}
          </div>
        </div>

        {/* CỘT 2 */}
        <div>
          <div
            style={{
              fontSize: "20px",
              fontWeight: "700",
              marginBottom: "20px",
              color: textColor
            }}
          >
            {column2Title}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px"
            }}
          >
            {column2Links.map((item, index) => (
              <a
                key={index}
                href={item.url}
                onMouseEnter={() => setHoveredLink(`c2-${index}`)}
                onMouseLeave={() => setHoveredLink(null)}
                style={linkStyle(`c2-${index}`)}
              >
                {item.text}
              </a>
            ))}
          </div>
        </div>

        {/* CỘT 3 */}
        <div>
          <div
            style={{
              fontSize: "20px",
              fontWeight: "700",
              marginBottom: "20px",
              color: textColor
            }}
          >
            {column3Title}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px"
            }}
          >
            {column3Links.map((item, index) => (
              <a
                key={index}
                href={item.url}
                onMouseEnter={() => setHoveredLink(`c3-${index}`)}
                onMouseLeave={() => setHoveredLink(null)}
                style={linkStyle(`c3-${index}`)}
              >
                {item.text}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* HÀNG CHÍNH THỨ 2 */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.15)",
          paddingTop: "20px",

          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        {/* COPYRIGHT */}
        <div
          style={{
            color: textColor
          }}
        >
          {copyright}
        </div>

        {/* SOCIAL */}
        <div
          style={{
            display: "flex",
            gap: "16px"
          }}
        >
          <a
            href={facebookUrl}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={facebookIcon}
              alt="facebook"
              style={{
                width: "32px",
                height: "32px"
              }}
            />
          </a>

          <a
            href={tiktokUrl}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={tiktokIcon}
              alt="tiktok"
              style={{
                width: "32px",
                height: "32px"
              }}
            />
          </a>

          <a
            href={youtubeUrl}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={youtubeIcon}
              alt="youtube"
              style={{
                width: "32px",
                height: "32px"
              }}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default ComponentFooter;