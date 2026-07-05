import React, { useEffect, useState } from "react";

export default function TypewriterAnimation({
  texts = [
    "Digital Transformation",
    "Artificial Intelligence",
    "Smart Manufacturing",
  ],

  fontSize = 35,
  color = "#ffffff",

  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 1800,
}) {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!texts.length) return;

    const currentText = texts[textIndex];

    let timeout;

    if (!isDeleting) {
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenTexts);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    displayText,
    isDeleting,
    textIndex,
    texts,
    typingSpeed,
    deletingSpeed,
    delayBetweenTexts,
  ]);

  return (
    <div
      style={{
        fontSize,
        color,
        fontFamily: "Arial",
        fontWeight: 700,
        minHeight: fontSize * 1.5,
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <span>{displayText}</span>

      <span
        style={{
          marginLeft: 3,
          animation: "typewriterCursor .8s infinite",
        }}
      >
        |
      </span>

      <style>
        {`
          @keyframes typewriterCursor {
            0% {
              opacity: 1;
            }
            50% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
}