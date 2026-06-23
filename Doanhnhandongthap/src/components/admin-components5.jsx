import React, { useState } from "react";

const HoverButton = ({
  text,
  bgColor,
  textColor,
  hoverColor,
  width,
  height,
  fontSize
}) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        backgroundColor: hover ? hoverColor : bgColor,
        color: textColor,
        width: `${width}px`,
        height: `${height}px`,
        fontSize: `${fontSize}px`,
        border: "1px solid #ddd",
        borderRadius: "30px",
        cursor: "pointer",
        transition: "0.3s"
      }}
    >
      {text}
    </button>
  );
};

const Components5 = ({
  title,
  titleColor,
  titleSize,

  button1Text,
  button1BgColor,
  button1TextColor,
  button1HoverColor,

  button2Text,
  button2BgColor,
  button2TextColor,
  button2HoverColor,

  mainButtonText,
  mainButtonBgColor,
  mainButtonTextColor,
  mainButtonHoverColor,

  buttonWidth,
  buttonHeight,
  buttonFontSize
}) => {
  return (
    <div
      style={{
        padding: "60px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px",
        background: "transparent"
      }}
    >
      {/* Hàng 1 */}
      <div
        style={{
            color: titleColor,
            fontSize: `${titleSize}px`,
            fontWeight: "700",
            textAlign: "center",
            whiteSpace: "pre-line",
            width: "100%"
        }}
        >
        {title}
        </div>

      {/* Hàng 2 */}
      <div
        style={{
          display: "flex",
          gap: "20px"
        }}
      >
        <HoverButton
          text={button1Text}
          bgColor={button1BgColor}
          textColor={button1TextColor}
          hoverColor={button1HoverColor}
          width={buttonWidth}
          height={buttonHeight}
          fontSize={buttonFontSize}
        />

        <HoverButton
          text={button2Text}
          bgColor={button2BgColor}
          textColor={button2TextColor}
          hoverColor={button2HoverColor}
          width={buttonWidth}
          height={buttonHeight}
          fontSize={buttonFontSize}
        />
      </div>

      {/* Hàng 3 */}
      <HoverButton
        text={mainButtonText}
        bgColor={mainButtonBgColor}
        textColor={mainButtonTextColor}
        hoverColor={mainButtonHoverColor}
        width={buttonWidth}
        height={buttonHeight}
        fontSize={buttonFontSize}
      />
    </div>
  );
};

export default Components5;