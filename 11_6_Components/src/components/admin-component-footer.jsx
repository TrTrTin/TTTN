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

  homeLink,
  newsLink,
  aboutLink,
  activityLink,
  memberLink,
  registerLink,
  boardLink,

  column3Title,

  myhLink,
  mycLink,
  hhfLink,
  hheLink,
  hhaLink,
  coweLink,
  hhnLink,
  hyvLink,

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
            <a
                href={homeLink}
                onMouseEnter={() => setHoveredLink("home")}
                onMouseLeave={() => setHoveredLink(null)}
                style={linkStyle("home")}
                >
                Trang chủ
                </a>

            <a
                href={newsLink}
                onMouseEnter={() => setHoveredLink("news")}
                onMouseLeave={() => setHoveredLink(null)}
                style={linkStyle("news")}
                >
                Tin tức và sự kiện
                </a>

            <a href={aboutLink} style={{ color: linkColor }}>
              Về chúng tôi
            </a>

            <a href={activityLink} style={{ color: linkColor }}>
              Các lĩnh vực hoạt động
            </a>

            <a href={memberLink} style={{ color: linkColor }}>
              Doanh nghiệp hội viên
            </a>

            <a href={registerLink} style={{ color: linkColor }}>
              Đăng ký
            </a>

            <a href={boardLink} style={{ color: linkColor }}>
              Hoạt động ban
            </a>
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
            <a href={myhLink} style={{ color: linkColor }}>MYH</a>
            <a href={mycLink} style={{ color: linkColor }}>MYC</a>
            <a href={hhfLink} style={{ color: linkColor }}>HHF</a>
            <a href={hheLink} style={{ color: linkColor }}>HHE</a>
            <a href={hhaLink} style={{ color: linkColor }}>HHA</a>
            <a href={coweLink} style={{ color: linkColor }}>COWE</a>
            <a href={hhnLink} style={{ color: linkColor }}>HHN</a>
            <a href={hyvLink} style={{ color: linkColor }}>HYV</a>
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