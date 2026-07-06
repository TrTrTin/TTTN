import React, { useState, useRef, useEffect } from "react";

export default function LanguageSwitcher({
  language = "VI",

  translations = [],

  onChangeLanguage,

  viFlag = "/images/VI_icon.webp",
  enFlag = "/images/EN_icon.svg",
  mixFlag = "/images/MIX_icon.jpg",

  flagSize = 34,
}) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  const getFlag = (lang) => {
    switch (lang) {
      case "VI":
        return viFlag;

      case "EN":
        return enFlag;

      case "MIX":
        return mixFlag;

      default:
        return viFlag;
    }
  };

  const handleSelect = (projectId) => {
    setOpen(false);

    onChangeLanguage?.(projectId);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  return (
    <div className="relative" ref={wrapperRef}>
      {/* Current language */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="
        flex
        items-center
        gap-3
        rounded-lg
        border
        border-gray-300
        bg-white
        px-3
        py-2
        shadow
        transition
        hover:bg-gray-50
      "
      >
        <img
          src={getFlag(language)}
          alt={language}
          width={flagSize}
          height={flagSize}
          className="rounded object-cover"
        />

        <span className="text-lg">▼</span>
      </button>

      {open && (
        <div
          className="
          absolute
          right-0
          mt-2
          w-52
          overflow-hidden
          rounded-xl
          border
          bg-white
          shadow-xl
          z-50
        "
        >
          {translations.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() => handleSelect(project.id)}
              className="
              flex
              w-full
              items-center
              gap-3
              px-4
              py-3
              text-left
              transition
              hover:bg-slate-100
            "
            >
              <img
                src={getFlag(project.language)}
                alt={project.language}
                width={flagSize}
                height={flagSize}
                className="rounded object-cover"
              />

              <span className="font-medium">
                {project.language}
              </span>

              {project.language === language && (
                <span className="ml-auto text-green-600">
                  ✓
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
