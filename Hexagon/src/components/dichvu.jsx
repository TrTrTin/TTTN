import React, { useState } from "react";

export default function DichVu({
    // Language
    language = "VI",
    // Background
    backgroundFrom,
    backgroundTo,

    // Section title
    title,
    titleFontSize,
    titleColor,

    subtitle,
    subtitleFontSize,
    subtitleColor,

    // Card
    cards = [],

    cardWidth,
    cardHeight,
    cardRadius,

    // Hover Overlay
    overlayFrom,
    overlayTo,

    overlayTitleFontSize,
    overlayTitleColor,

    overlayTextFontSize,
    overlayTextColor,

    overlayLinkFontSize,
    overlayLinkColor,
}) {

    const [hovered, setHovered] = useState(null);

    return (
        <section
            lang={language?.toLowerCase()}
            className="w-full"
            style={{
                background: `linear-gradient(to right, ${backgroundFrom}, ${backgroundTo})`,
            }}
        >
            <div className="mx-auto max-w-7xl px-6 py-20">

                {/* ===========================
                    HEADER
                =========================== */}

                <div className="text-center">

                    <h2
                        style={{
                            fontFamily: "Arial",
                            fontSize: titleFontSize,
                            color: titleColor,
                            fontWeight: 700,
                        }}
                    >
                        {title}
                    </h2>

                    <p
                        style={{
                            fontFamily: "Arial",
                            fontSize: subtitleFontSize,
                            color: subtitleColor,
                            marginTop: 12,
                        }}
                    >
                        {subtitle}
                    </p>

                </div>

                {/* ===========================
                    CARDS
                =========================== */}

                <div
                    className="
        mt-14
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-4
        gap-x-10
        gap-y-10
        justify-items-center
    "
                >

                    {cards.map((item, index) => (

                        <a
                            key={index}
                            href={item.link || "#"}
                            onMouseEnter={() => setHovered(index)}
                            onMouseLeave={() => setHovered(null)}
                            style={{
                                width: cardWidth,
                                height: cardHeight,
                                borderRadius: cardRadius,
                                backgroundImage: `url(${item.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                fontFamily: "Arial",
                                transform:
                                    hovered === index
                                        ? "translateY(-12px)"
                                        : "translateY(0)",

                                transition: ".35s ease",

                                overflow: "hidden",
                                position: "relative",

                                textDecoration: "none",

                                boxShadow:
                                    hovered === index
                                        ? "0 20px 45px rgba(0,0,0,.18)"
                                        : "0 8px 20px rgba(0,0,0,.12)",
                            }}
                        >

                            {/* ===========================
                                TITLE
                            =========================== */}

                            <div
                                style={{
                                    position: "absolute",
                                    top: 24,
                                    left: 24,
                                    right: 24,
                                    zIndex: 5,

                                    fontSize: overlayTitleFontSize,
                                    color: overlayTitleColor,
                                    fontWeight: 700,
                                }}
                            >
                                {item.title}
                            </div>

                            {/* ===========================
                                OVERLAY
                            =========================== */}

                            <div
                                style={{
                                    position: "absolute",
                                    inset: 0,

                                    background: `linear-gradient(
            to bottom right,
            ${overlayFrom},
            ${overlayTo}
        )`,

                                    opacity: hovered === index ? 1 : 0,

                                    transform:
                                        hovered === index
                                            ? "translateY(0)"
                                            : "translateY(30px)",

                                    transition: ".35s ease",

                                    paddingTop: 70,
                                    paddingLeft: 24,
                                    paddingRight: 24,
                                    paddingBottom: 24,

                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >

                                <p
                                    style={{
                                        marginTop: 30,
                                        fontSize: overlayTextFontSize,
                                        color: overlayTextColor,
                                        lineHeight: 1.7,
                                    }}
                                >
                                    {item.description}
                                </p>

                                <p
                                    style={{
                                        fontSize: overlayLinkFontSize,
                                        color: overlayLinkColor,
                                        marginTop: 14,
                                        fontWeight: 700,
                                    }}
                                >
                                    {item.moreText}
                                </p>

                            </div>

                        </a>

                    ))}

                </div>

            </div>
        </section>
    );
}