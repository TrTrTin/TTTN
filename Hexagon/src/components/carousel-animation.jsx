import React, { useMemo, useState } from "react";

export default function CarouselAnimation({
    language = "VI",
    // =========================
    // Background
    // =========================

    backgroundFrom,
    backgroundTo,
    sectionHeight,

    // =========================
    // Title
    // =========================

    title,
    titleFontSize,
    titleColor,

    // =========================
    // Box
    // =========================

    boxWidth,
    boxHeight,
    boxRadius,
    boxBackground,

    // =========================
    // Animation
    // =========================

    direction,
    speed,

    // =========================
    // Images
    // =========================

    images = [],

}) {

    const [paused, setPaused] = useState(false);

    const animationName = useMemo(() => {

        if (direction === "right") {
            return "carouselRight";
        }

        return "carouselLeft";

    }, [direction]);

    const loopImages = [...images, ...images];

    return (

        <>
            <style>

                {`

                @keyframes carouselLeft{

                    from{
                        transform:translateX(0);
                    }

                    to{
                        transform:translateX(-50%);
                    }

                }

                @keyframes carouselRight{

                    from{
                        transform:translateX(-50%);
                    }

                    to{
                        transform:translateX(0);
                    }

                }

            `}
            </style>

            <section
                lang={language?.toLowerCase()}
                style={{

                    background: `linear-gradient(to bottom, ${backgroundFrom}, ${backgroundTo})`,

                    minHeight: sectionHeight,

                    overflow: "hidden",

                }}

                className="w-full"

            >

                <div className="max-w-7xl mx-auto px-6 py-16">

                    {/* ========================= TITLE ========================= */}

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

                    </div>

                    {/* ========================= CAROUSEL ========================= */}

                    <div

                        className="mt-14 overflow-hidden"

                        onMouseEnter={() => setPaused(true)}

                        onMouseLeave={() => setPaused(false)}

                    >

                        <div

                            style={{

                                display: "flex",

                                width: "max-content",

                                gap: 32,

                                animation: `${animationName} ${speed}s linear infinite`,

                                animationPlayState: paused ? "paused" : "running",

                            }}

                        >

                            {loopImages.map((item, index) => (

                                <div

                                    key={index}

                                    style={{

                                        width: boxWidth,

                                        height: boxHeight,

                                        background: boxBackground,

                                        borderRadius: boxRadius,

                                        flexShrink: 0,

                                        display: "flex",

                                        justifyContent: "center",

                                        alignItems: "center",

                                        overflow: "hidden",

                                        transition: ".3s",

                                    }}

                                >

                                    <img

                                        src={item.image}

                                        alt=""

                                        style={{

                                            width: "80%",

                                            height: "80%",

                                            objectFit: "contain",

                                        }}

                                    />

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </section>

        </>

    );

}