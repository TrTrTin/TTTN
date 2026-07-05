import React from "react";

export default function GioiThieu({
    // Background
    backgroundFrom,
    backgroundTo,

    // Left Image
    image,

    imageBackgroundFrom,
    imageBackgroundTo,

    imageRotate,

    // Quote Card
    quoteBackground,
    quoteShadow,

    quoteText,

    quoteAuthor,

    quoteFontSize,
    quoteColor,

    quoteAuthorFontSize,
    quoteAuthorColor,

    // Right
    title,

    titleFontSize,
    titleColor,

    description,

    descriptionFontSize,
    descriptionColor,

    // Feature Box
    boxBackground,

    boxTitleFontSize,
    boxTitleColor,

    boxDescriptionFontSize,
    boxDescriptionColor,

    features = [],
}) {
    return (
        <section
            className="w-full"
            style={{
                background: `linear-gradient(to right, ${backgroundFrom}, ${backgroundTo})`,
            }}
        >
            <div className="mx-auto max-w-7xl px-6 py-20">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

                    {/* ================= LEFT ================= */}

                    <div className="relative">

                        {/* Background */}

                        <div
                            className="absolute -inset-5 rounded-3xl"
                            style={{
                                background: `linear-gradient(to bottom right,
                                ${imageBackgroundFrom},
                                ${imageBackgroundTo})`,
                                transform: `rotate(${imageRotate}deg)`,
                            }}
                        />

                        {/* Image */}

                        <img
                            src={image}
                            alt=""
                            className="
                                relative
                                w-full
                                rounded-2xl
                                object-cover
                                shadow-lg
                            "
                        />

                        {/* Quote */}

                        <div
                            className="
                                absolute
                                left-100
                                bottom-2
                                w-56
                                rounded-[10px]
                                p-5
                                transition-all
                                duration-300
                                hover:-translate-y-3
                            "
                            style={{
                                background: quoteBackground,
                                boxShadow: quoteShadow,
                            }}
                        >
                            <p
                                style={{
                                    fontFamily: "Arial",
                                    fontSize: quoteFontSize,
                                    color: quoteColor,
                                    fontStyle: "italic",
                                    textAlign: "center",
                                    lineHeight: 1.7,
                                }}
                            >
                                {quoteText}
                            </p>

                            <p
                                style={{
                                    fontFamily: "Arial",
                                    fontSize: quoteAuthorFontSize,
                                    color: quoteAuthorColor,
                                    textAlign: "right",
                                    marginTop: 12,
                                    fontWeight: 700,
                                }}
                            >
                                {quoteAuthor}
                            </p>
                        </div>

                    </div>

                    {/* ================= RIGHT ================= */}

                    <div className="flex flex-col gap-10">

                        {/* Title */}

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

                        {/* Paragraph */}

                        <p
                            style={{
                                fontFamily: "Arial",
                                fontSize: descriptionFontSize,
                                color: descriptionColor,
                                lineHeight: 2,
                            }}
                        >
                            {description}
                        </p>

                        {/* Boxes */}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                            {features.map((item, index) => (

                                <div
                                    key={index}
                                    className="rounded-xl p-7"
                                    style={{
                                        background: boxBackground,
                                    }}
                                >

                                    <h3
                                        style={{
                                            fontFamily: "Arial",
                                            fontSize: boxTitleFontSize,
                                            color: boxTitleColor,
                                            fontWeight: 700,
                                            marginBottom: 18,
                                        }}
                                    >
                                        {item.title}
                                    </h3>

                                    <p
                                        style={{
                                            fontFamily: "Arial",
                                            fontSize: boxDescriptionFontSize,
                                            color: boxDescriptionColor,
                                            lineHeight: 1.8,
                                        }}
                                    >
                                        {item.description}
                                    </p>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}