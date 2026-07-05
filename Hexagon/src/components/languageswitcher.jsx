import React from "react";

export default function LanguageSwitcher({
  language = "VI",
  onChangeLanguage,
  viFlag = "/images/VI_icon.webp",
  enFlag = "/images/EN_icon.svg",
  flagSize = 34,
}) {
  const handleChange = (targetLanguage) => {
    if (targetLanguage === language) return;

    onChangeLanguage?.(targetLanguage);
  };

  const activeStyle =
    "opacity-100 scale-110 ring-2 ring-yellow-400 shadow-lg";

  const inactiveStyle =
    "opacity-50 hover:opacity-100 hover:scale-105";

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={() => handleChange("VI")}
        className={`overflow-hidden rounded-full transition-all duration-300 ${
          language === "VI" ? activeStyle : inactiveStyle
        }`}
        aria-label="Tiếng Việt"
      >
        <img
          src={viFlag}
          alt="Vietnamese"
          width={flagSize}
          height={flagSize}
          className="object-cover"
        />
      </button>

      <button
        type="button"
        onClick={() => handleChange("EN")}
        className={`overflow-hidden rounded-full transition-all duration-300 ${
          language === "EN" ? activeStyle : inactiveStyle
        }`}
        aria-label="English"
      >
        <img
          src={enFlag}
          alt="English"
          width={flagSize}
          height={flagSize}
          className="object-cover"
        />
      </button>
    </div>
  );
}