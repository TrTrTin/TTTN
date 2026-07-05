import React from "react";
import TypewriterAnimation from "./animation";

export default function TrangChu({
    // Background
    backgroundFrom ,
    backgroundTo,
    backgroundHeight,

    // Badge
    badgeText,
    badgeFontSize,
    badgeColor,
    badgeBorderColor,

    // Typewriter
    typewriterTexts = [],
    typewriterFontSize,
    typewriterColor,
    typewriterTypingSpeed,
    typewriterDeletingSpeed,
    typewriterDelay,

    // Gradient Title
    title,

    titleFontSize,

    titleGradientFrom,
    titleGradientMiddle,
    titleGradientTo,

    // Description
    description,
    descriptionFontSize,
    descriptionColor,

    // Buttons
    buttons = [],

    buttonFontSize,
    buttonBorderRadius,
    buttonPaddingX,
    buttonPaddingY,

    buttonGradientFrom,
    buttonGradientTo,

    secondaryButtonBackground,
    secondaryButtonBorder,

    image,
}) {
    return (
        <section
            className="w-full"
            style={{
                background: `linear-gradient(to bottom right, ${backgroundFrom}, ${backgroundTo})`,
                minHeight: `${backgroundHeight}px`,
            }}
        >
            <div className="mx-auto max-w-7xl px-6 py-16">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* ================= LEFT ================= */}

                    <div className="flex flex-col gap-8">

                        {/* Row 1 */}

                        <div>

                            <span
                                style={{
                                    color: badgeColor,
                                    border: `2px solid ${badgeBorderColor}`,
                                    borderRadius: "999px",
                                    fontSize: badgeFontSize,
                                    fontFamily: "Arial",
                                }}
                                className="inline-block px-6 py-2 font-semibold"
                            >
                                {badgeText}
                            </span>

                        </div>

                        {/* Row 2 */}

                        <div>

                            <TypewriterAnimation
                                texts={typewriterTexts}
                                fontSize={typewriterFontSize}
                                color={typewriterColor}
                                typingSpeed={typewriterTypingSpeed}
                                deletingSpeed={typewriterDeletingSpeed}
                                delayBetweenTexts={typewriterDelay}
                            />

                        </div>

                        {/* Row 3 */}

                        <div>

                            <h2
                                style={{
                                    fontSize: titleFontSize,
                                    fontFamily: "Arial",
                                    fontWeight: 700,
                                    background: `linear-gradient(to right,
                  ${titleGradientFrom},
                  ${titleGradientMiddle},
                  ${titleGradientTo})`,
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                {title}
                            </h2>

                        </div>

                        {/* Row 4 */}

                        <div>

                            <p
                                style={{
                                    fontSize: descriptionFontSize,
                                    color: descriptionColor,
                                    fontFamily: "Arial",
                                    lineHeight: 1.7,
                                }}
                            >
                                {description}
                            </p>

                        </div>

                        {/* Row 5 */}

                        <div className="flex flex-wrap gap-5">

                            {buttons.map((button, index) => {

                                const isPrimary = button.variant === "primary";

                                return (
                                    <a
                                        key={index}
                                        href={button.link}
                                        style={{
                                            fontSize: buttonFontSize,
                                            borderRadius: buttonBorderRadius,

                                            padding: `${buttonPaddingY}px ${buttonPaddingX}px`,

                                            fontFamily: "Arial",

                                            transition: ".3s",

                                            background: isPrimary
                                                ? `linear-gradient(to right,
                        ${buttonGradientFrom},
                        ${buttonGradientTo})`
                                                : secondaryButtonBackground,

                                            border: isPrimary
                                                ? "none"
                                                : `1px solid ${secondaryButtonBorder}`,

                                            color: "#ffffff",

                                            backdropFilter: "blur(12px)",

                                            textDecoration: "none",

                                            fontWeight: 600,
                                        }}
                                         onMouseEnter={(e) => {
        e.currentTarget.style.filter = "brightness(1.25)";
    }}
    onMouseLeave={(e) => {
        e.currentTarget.style.filter = "brightness(1)";
    }}
                                    >
                                        {button.text}
                                    </a>
                                );

                            })}

                        </div>

                    </div>

                    {/* ================= RIGHT ================= */}

                    <div className="flex justify-center">

                        <img
                            src={image}
                            alt=""
                            className="w-full max-w-xl object-contain"
                        />

                    </div>

                </div>

            </div>
        </section>
    );
}