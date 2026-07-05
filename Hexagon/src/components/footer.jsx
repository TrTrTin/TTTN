import React, { useState } from "react";

export default function Footer({

  // =========================
  // Top Background
  // =========================

  backgroundFrom,
  backgroundTo,
  topSectionHeight,

  // =========================
  // Left
  // =========================

  title,
  titleFontSize,
  titleColor,

  subtitle,
  subtitleFontSize,
  subtitleColor,

  // =========================
  // Contact Item
  // =========================

  contacts = [],

  iconSize,
  iconBackground,
  iconBorderColor,

  contactTitleFontSize,
  contactTitleColor,

  contactTextFontSize,
  contactTextColor,

  // =========================
  // Social
  // =========================

  socialLinks = [],

  socialFontSize,
  socialTextColor,

  socialBackground,
  socialBorderColor,

  socialHoverBackground,

  // =========================
  // Map
  // =========================

  mapEmbedUrl,

  // =========================
  // Bottom
  // =========================

  bottomBackground,

  copyright,

  copyrightFontSize,

  copyrightColor,

}) {

  const [hoverSocial, setHoverSocial] = useState(null);

  return (

    <footer className="w-full">

      {/* ======================================
                    TOP
            ======================================= */}

      <div

        style={{

          background: `linear-gradient(
                        to right,
                        ${backgroundFrom},
                        ${backgroundTo}
                    )`,

          minHeight: topSectionHeight,

        }}

      >

        <div

          className="

                        mx-auto

                        max-w-7xl

                        px-6

                        py-16

                        grid

                        grid-cols-1

                        lg:grid-cols-2

                        gap-14

                        items-start

                    "

        >

          {/* ======================================
                            LEFT
                    ======================================= */}

          <div
            className="flex flex-col"
          >

            {/* TITLE */}

            <h2

              style={{

                fontFamily: "Arial",

                fontSize: titleFontSize,

                color: titleColor,

                fontWeight: 700,

                lineHeight: 1.4,

              }}

            >

              {title}

            </h2>

            {/* SUBTITLE */}

            <p

              style={{

                marginTop: 18,

                fontFamily: "Arial",

                fontSize: subtitleFontSize,

                color: subtitleColor,

                lineHeight: 1.8,

              }}

            >

              {subtitle}

            </p>

            {/* CONTACT */}

            <div

              className="

                                mt-12

                                flex

                                flex-col

                                gap-8

                            "

            >

              {contacts.map((item, index) => (

                <div

                  key={index}

                  className="flex items-center gap-5"

                >

                  {/* ICON */}

                  <div

                    style={{

                      width: iconSize,

                      height: iconSize,

                      background: iconBackground,

                      border: `1px solid ${iconBorderColor}`,

                      borderRadius: "999px",

                      display: "flex",

                      justifyContent: "center",

                      alignItems: "center",

                      flexShrink: 0,

                    }}

                  >

                    <img

                      src={item.icon}

                      alt=""

                      style={{

                        width: iconSize * 0.42,

                        height: iconSize * 0.42,

                        objectFit: "contain",

                      }}

                    />

                  </div>

                  {/* TEXT */}

                  <div>

                    <div

                      style={{

                        fontFamily: "Arial",

                        fontSize: contactTitleFontSize,

                        color: contactTitleColor,

                        fontWeight: 700,

                        lineHeight: 1.5,

                      }}

                    >

                      {item.title}

                    </div>

                    <div

                      style={{

                        marginTop: 4,

                        fontFamily: "Arial",

                        fontSize: contactTextFontSize,

                        color: contactTextColor,

                        lineHeight: 1.7,

                      }}

                    >

                      {item.text}

                    </div>

                  </div>

                </div>

              ))}

            </div>

            {/* DIVIDER */}

            <div

              style={{

                marginTop: 34,

                width: "100%",

                height: 1,

                background: "#dfe7ea",

              }}

            />

            {/* SOCIAL */}

            <div

              className="

                                mt-8

                                flex

                                flex-wrap

                                gap-4

                            "

            >

              {socialLinks.map((item, index) => (

                <a

                  key={index}

                  href={item.link}

                  onMouseEnter={() => setHoverSocial(index)}

                  onMouseLeave={() => setHoverSocial(null)}

                  style={{

                    fontFamily: "Arial",

                    fontSize: socialFontSize,

                    color: socialTextColor,

                    background:

                      hoverSocial === index
                        ? socialHoverBackground
                        : socialBackground,

                    border: `1px solid ${socialBorderColor}`,

                    borderRadius: 10,

                    textDecoration: "none",

                    fontWeight: 700,

                    padding: "12px 22px",

                    transition: ".3s",

                    display: "inline-flex",

                    justifyContent: "center",

                    alignItems: "center",

                  }}

                >

                  {item.text}

                </a>

              ))}

            </div>

          </div>

          {/* ======================================
                            RIGHT
                    ======================================= */}

          <div
            className="w-full"
          >

            <div

              style={{

                width: "100%",

                height: "100%",

                minHeight: 520,

                borderRadius: 12,

                overflow: "hidden",

                boxShadow:
                  "0 10px 28px rgba(0,0,0,.12)",

              }}

            >

              <iframe

                title="Google Map"

                src={mapEmbedUrl}

                width="100%"

                height="100%"

                style={{

                  border: 0,

                  minHeight: 520,

                }}

                allowFullScreen=""

                loading="lazy"

                referrerPolicy="no-referrer-when-downgrade"

              />

            </div>

          </div>

        </div>

      </div>

      {/* ======================================
                    BOTTOM
            ======================================= */}

      <div

        style={{

          background: bottomBackground,

          padding: "22px 16px",

        }}

      >

        <div

          className="

                        mx-auto

                        max-w-7xl

                        text-center

                    "

        >

          <span

            style={{

              fontFamily: "Arial",

              fontSize: copyrightFontSize,

              color: copyrightColor,

              lineHeight: 1.8,

            }}

          >

            {copyright}

          </span>

        </div>

      </div>

    </footer>

  );

}