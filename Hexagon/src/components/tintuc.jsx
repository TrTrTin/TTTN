import React, { useState } from "react";

export default function TinTuc({

    // ===========================
    // Background
    // ===========================

    backgroundFrom,
    backgroundTo,
    sectionHeight,

    // ===========================
    // Header
    // ===========================

    title,
    titleFontSize,
    titleColor,

    subtitle,
    subtitleFontSize,
    subtitleColor,

    dividerWidth,
    dividerHeight,
    dividerColor,

    // ===========================
    // Hot News Box
    // ===========================

    hotBoxWidth,
    hotBoxHeight,
    hotBoxRadius,
    hotBoxBackground,

    // ===========================
    // Normal Box
    // ===========================

    normalBoxWidth,
    normalBoxHeight,
    normalBoxRadius,
    normalBoxBackground,

    // ===========================
    // Image
    // ===========================

    imageHeight,

    // ===========================
    // Text
    // ===========================

    newsTitleFontSize,
    newsTitleColor,

    paragraphFontSize,
    paragraphColor,

    dateFontSize,
    dateColor,

    detailFontSize,
    detailColor,

    // ===========================
    // Button
    // ===========================

    buttonWidth,
    buttonHeight,
    buttonRadius,

    buttonFrom,
    buttonTo,

    buttonText,
    buttonTextColor,
    buttonFontSize,

    // ===========================
    // Data
    // ===========================

    hotNews = [],
    normalNews = [],

}) {

    const [hoverHot, setHoverHot] = useState(null);
    const [hoverNormal, setHoverNormal] = useState(null);
    const [hoverButton, setHoverButton] = useState(false);

    return (

        <section

            className="w-full"

            style={{

                background: `linear-gradient(to right,
                    ${backgroundFrom},
                    ${backgroundTo})`,

                minHeight: sectionHeight,

            }}

        >

            <div className="mx-auto max-w-7xl px-6 py-16">

                {/* ==========================================
                            HEADER
                =========================================== */}

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

                            marginTop: 14,

                            fontFamily: "Arial",

                            fontSize: subtitleFontSize,

                            color: subtitleColor,

                        }}

                    >

                        {subtitle}

                    </p>

                    <div

                        style={{

                            width: dividerWidth,

                            height: dividerHeight,

                            background: dividerColor,

                            margin: "18px auto 0",

                            borderRadius: 999,

                        }}

                    />

                </div>

                {/* ==========================================
                        HOT NEWS
                =========================================== */}

                <div

                    className="

                        mt-14

                        grid

                        grid-cols-1

                        lg:grid-cols-2

                        gap-8

                    "

                >

                    {hotNews.map((item, index) => (

                        <a

                            key={index}

                            href={item.link || "#"}

                            onMouseEnter={() => setHoverHot(index)}

                            onMouseLeave={() => setHoverHot(null)}

                            style={{

                                width: "100%",

                                maxWidth: hotBoxWidth,

                                height: hotBoxHeight,

                                margin: "0 auto",

                                borderRadius: hotBoxRadius,

                                background: hotBoxBackground,

                                overflow: "hidden",

                                textDecoration: "none",

                                border:

                                    hoverHot === index

                                        ? "1px solid #fcc600"

                                        : "1px solid transparent",

                                transition: ".35s",

                                boxShadow:
                                    "0 8px 24px rgba(0,0,0,.12)",

                            }}

                        >

                            {/* IMAGE */}

                            <div

                                style={{

                                    height: imageHeight,

                                    overflow: "hidden",

                                }}

                            >

                                <img

                                    src={item.image}

                                    alt=""

                                    style={{

                                        width: "100%",

                                        height: "100%",

                                        objectFit: "cover",

                                        transition: ".45s",

                                        transform:

                                            hoverHot === index

                                                ? "scale(1.18)"

                                                : "scale(1)",

                                    }}

                                />

                            </div>

                            {/* CONTENT */}

                            <div

                                style={{

                                    padding: 18,

                                    display: "flex",

                                    flexDirection: "column",

                                    height: `calc(100% - ${imageHeight}px)`,

                                }}

                            >

                                {/* TITLE */}

                                <h3

                                    style={{

                                        fontFamily: "Arial",

                                        fontSize: newsTitleFontSize,

                                        color:

                                            hoverHot === index

                                                ? "#d18800"

                                                : newsTitleColor,

                                        fontWeight: 700,

                                        transition: ".3s",

                                        lineHeight: 1.6,

                                    }}

                                >

                                    {item.title}

                                </h3>

                                {/* PARAGRAPH */}

                                <p

                                    style={{

                                        marginTop: 14,

                                        fontFamily: "Arial",

                                        fontSize: paragraphFontSize,

                                        color: paragraphColor,

                                        lineHeight: 1.8,

                                        flex: 1,

                                    }}

                                >

                                    {item.description}

                                </p>

                                {/* FOOTER */}

                                <div

                                    style={{

                                        display: "flex",

                                        justifyContent: "space-between",

                                        alignItems: "center",

                                        marginTop: 22,

                                        borderTop: "1px solid #ececec",

                                        paddingTop: 14,

                                    }}

                                >

                                    {/* DATE */}

                                    <div

                                        style={{

                                            display: "flex",

                                            alignItems: "center",

                                            gap: 6,

                                            fontFamily: "Arial",

                                            fontSize: dateFontSize,

                                            color: dateColor,

                                        }}

                                    >

                                        <span>📅</span>

                                        <span>{item.date}</span>

                                    </div>

                                    {/* DETAIL */}

                                    <span

                                        style={{

                                            fontFamily: "Arial",

                                            fontSize: detailFontSize,

                                            color: detailColor,

                                            fontWeight: 700,

                                            borderBottom:

                                                hoverHot === index

                                                    ? `1px solid ${detailColor}`

                                                    : "1px solid transparent",

                                            transition: ".3s",

                                        }}

                                    >

                                        {item.detailText}

                                    </span>

                                </div>

                            </div>

                        </a>

                    ))}

                </div>

                {/* ==========================================
                        NORMAL NEWS
                =========================================== */}

                <div

                    className="

                        mt-10

                        grid

                        grid-cols-1

                        md:grid-cols-2

                        xl:grid-cols-3

                        gap-8

                    "

                >

                    {normalNews.map((item, index) => (

                        <a

                            key={index}

                            href={item.link || "#"}

                            onMouseEnter={() => setHoverNormal(index)}

                            onMouseLeave={() => setHoverNormal(null)}

                            style={{

                                width: "100%",

                                maxWidth: normalBoxWidth,

                                height: normalBoxHeight,

                                margin: "0 auto",

                                background: normalBoxBackground,

                                borderRadius: normalBoxRadius,

                                overflow: "hidden",

                                textDecoration: "none",

                                transition: ".35s",

                                border:

                                    hoverNormal === index

                                        ? "1px solid #fcc600"

                                        : "1px solid transparent",

                                boxShadow:
                                    "0 8px 24px rgba(0,0,0,.12)",

                            }}

                        >

                            {/* IMAGE */}

                            <div

                                style={{

                                    height: imageHeight,

                                    overflow: "hidden",

                                }}

                            >

                                <img

                                    src={item.image}

                                    alt=""

                                    style={{

                                        width: "100%",

                                        height: "100%",

                                        objectFit: "cover",

                                        transition: ".45s",

                                        transform:

                                            hoverNormal === index

                                                ? "scale(1.18)"

                                                : "scale(1)",

                                    }}

                                />

                            </div>

                            {/* CONTENT */}

                            <div

                                style={{

                                    padding: 18,

                                    display: "flex",

                                    flexDirection: "column",

                                    height: `calc(100% - ${imageHeight}px)`,

                                }}

                            >

                                {/* TITLE */}

                                <h3

                                    style={{

                                        fontFamily: "Arial",

                                        fontSize: newsTitleFontSize,

                                        color:

                                            hoverNormal === index

                                                ? "#d18800"

                                                : newsTitleColor,

                                        fontWeight: 700,

                                        transition: ".3s",

                                        lineHeight: 1.6,

                                    }}

                                >

                                    {item.title}

                                </h3>

                                {/* DESCRIPTION */}

                                <p

                                    style={{

                                        marginTop: 14,

                                        fontFamily: "Arial",

                                        fontSize: paragraphFontSize,

                                        color: paragraphColor,

                                        lineHeight: 1.8,

                                        flex: 1,

                                    }}

                                >

                                    {item.description}

                                </p>

                                {/* FOOTER */}

                                <div

                                    style={{

                                        marginTop: 22,

                                        paddingTop: 14,

                                        borderTop: "1px solid #ececec",

                                        display: "flex",

                                        justifyContent: "space-between",

                                        alignItems: "center",

                                    }}

                                >

                                    {/* DATE */}

                                    <div

                                        style={{

                                            display: "flex",

                                            alignItems: "center",

                                            gap: 6,

                                            fontFamily: "Arial",

                                            fontSize: dateFontSize,

                                            color: dateColor,

                                        }}

                                    >

                                        <span>📅</span>

                                        <span>{item.date}</span>

                                    </div>

                                    {/* DETAIL */}

                                    <span

                                        style={{

                                            fontFamily: "Arial",

                                            fontSize: detailFontSize,

                                            color: detailColor,

                                            fontWeight: 700,

                                            transition: ".3s",

                                            borderBottom:

                                                hoverNormal === index

                                                    ? `1px solid ${detailColor}`

                                                    : "1px solid transparent",

                                        }}

                                    >

                                        {item.detailText}

                                    </span>

                                </div>

                            </div>

                        </a>

                    ))}

                </div>

                {/* ==========================================
                        BUTTON
                =========================================== */}

                <div

                    className="mt-12 flex justify-center"

                >

                    <a

                        href="#"

                        onMouseEnter={() => setHoverButton(true)}

                        onMouseLeave={() => setHoverButton(false)}

                        style={{

                            width: buttonWidth,

                            height: buttonHeight,

                            borderRadius: buttonRadius,

                            background: `linear-gradient(
                                to right,
                                ${buttonFrom},
                                ${buttonTo}
                            )`,

                            display: "flex",

                            justifyContent: "center",

                            alignItems: "center",

                            textDecoration: "none",

                            transition: ".3s",

                            fontFamily: "Arial",

                            fontSize: buttonFontSize,

                            fontWeight: 700,

                            color: buttonTextColor,

                            border:

                                hoverButton

                                    ? "2px solid #6fbf34"

                                    : "2px solid transparent",

                            boxShadow:
                                "0 8px 22px rgba(0,0,0,.12)",

                        }}

                    >

                        {buttonText}

                    </a>

                </div>

            </div>

        </section>

    );

}