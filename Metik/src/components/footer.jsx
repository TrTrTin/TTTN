import React from "react";

const Footer = ({
  logo,
  description,
  title,
  phone,
  email,
  address,
  copyright,

  backgroundTop = "#ffbf1e",
  backgroundBottom = "#e67e22",

  titleColor = "#2e7d32",
  textColor = "#111111",
  bottomTextColor = "#ffffff",
}) => {
  return (
    <>
      <div
        style={{
          width: "100%",
          overflow: "hidden",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        {/* ================= TOP ================= */}

        <div
          style={{
            background: backgroundTop,
            minHeight: "220px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "70px 8%",
          }}
        >
          <div
            className="footer-grid"
            style={{
              width: "100%",
              maxWidth: "1400px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "60px",
              alignItems: "center",
            }}
          >
            {/* LEFT */}

            <div>
              <img
                src={logo}
                alt="Logo"
                style={{
                  width: "220px",
                  maxWidth: "100%",
                  marginBottom: "30px",
                  display: "block",
                }}
              />

              <div
                style={{
                  color: textColor,
                  fontSize: "17px",
                  lineHeight: "1.9",
                  textAlign: "justify",
                }}
              >
                {description}
              </div>
            </div>

            {/* RIGHT */}

            <div>
              <h2
                style={{
                  color: titleColor,
                  fontSize: "28px",
                  fontWeight: "700",
                  marginBottom: "35px",
                  fontFamily: "Arial, Helvetica, sans-serif",
                }}
              >
                {title}
              </h2>

              {/* Phone */}

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginBottom: "22px",
                  color: textColor,
                }}
              >
                <span
                  style={{
                    fontSize: "24px",
                    marginRight: "16px",
                  }}
                >
                  📞
                </span>

                <span
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.8",
                  }}
                >
                  {phone}
                </span>
              </div>

              {/* Email */}

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginBottom: "22px",
                  color: textColor,
                }}
              >
                <span
                  style={{
                    fontSize: "24px",
                    marginRight: "16px",
                  }}
                >
                  ✉️
                </span>

                <span
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.8",
                  }}
                >
                  {email}
                </span>
              </div>

              {/* Address */}

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  color: textColor,
                }}
              >
                <span
                  style={{
                    fontSize: "24px",
                    marginRight: "16px",
                  }}
                >
                  📍
                </span>

                <span
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.8",
                  }}
                >
                  {address}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}

        <div
          style={{
            background: backgroundBottom,
            padding: "22px 20px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              color: bottomTextColor,
              fontSize: "16px",
              fontWeight: "500",
              lineHeight: "1.8",
              fontFamily: "Arial, Helvetica, sans-serif",
            }}
          >
            {copyright}
          </div>
        </div>
      </div>

      {/* ================= Responsive ================= */}

      <style>{`
        .footer-grid{
          box-sizing:border-box;
        }

        @media (max-width:992px){

          .footer-grid{
            grid-template-columns:1fr !important;
            gap:50px !important;
          }

          .footer-grid img{
            margin:0 auto 25px auto !important;
          }

          .footer-grid>div:first-child{
            text-align:center;
          }

          .footer-grid h2{
            text-align:center;
            font-size:30px !important;
          }

        }

        @media (max-width:768px){

          .footer-grid{
            gap:40px !important;
          }

          .footer-grid h2{
            font-size:26px !important;
          }

          .footer-grid span{
            font-size:16px !important;
          }

        }

        @media (max-width:480px){

          .footer-grid{
            gap:30px !important;
          }

          .footer-grid img{
            width:170px !important;
          }

          .footer-grid h2{
            font-size:22px !important;
          }

        }
      `}</style>
    </>
  );
};

export default Footer;