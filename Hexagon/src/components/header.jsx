import React, { useState } from "react";
import LanguageSwitcher from "./languageswitcher";

export default function Header({
  logo,
  logoLink,

  websiteName,

  backgroundFrom,
  backgroundTo,

  textColor,
  hoverTextColor,

  menu = [],

  showLanguageSwitcher,

  language,
  onChangeLanguage = () => { },
}) {


  const [hoveredMenu, setHoveredMenu] = useState(null);
  return (
    <header
      style={{
        background: `linear-gradient(to right, ${backgroundFrom}, ${backgroundTo})`,
      }}
      className="w-full shadow-lg"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">

        {/* =========================
            LEFT
        ========================== */}

        <a
          href={logoLink}
          className="flex items-center gap-4 transition-opacity hover:opacity-90"
        >
          <img
            src={logo}
            alt="Logo"
            className="h-14 w-auto object-contain"
          />

          <h1
            style={{
              color: textColor,
              fontFamily: "Arial, sans-serif",
              transition: "color .3s ease, transform .3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = hoverTextColor;
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = textColor;
              e.currentTarget.style.transform = "scale(1)";
            }}
            className="
  text-base
  font-semibold
  text-[var(--menu-color)]
  transition-all
  duration-300
  
"
          >
            {websiteName}
          </h1>
        </a>

        {/* =========================
            RIGHT
        ========================== */}

        <div className="flex items-center gap-8">

          {/* Menu */}
          <nav
            className="
              hidden
              items-center
              gap-8

              lg:flex
            "
          >

            {menu.map((item, index) => (
              <a
                key={index}
                href={item.link || "#"}
                onMouseEnter={() => setHoveredMenu(index)}
                onMouseLeave={() => setHoveredMenu(null)}
                style={{
                  color:
                    hoveredMenu === index
                      ? hoverTextColor
                      : textColor,
                  fontFamily: "Arial, sans-serif",
                  transition: "all .3s ease",
                  transform:
                    hoveredMenu === index
                      ? "scale(1.05)"
                      : "scale(1)",
                }}
                className="text-base font-semibold"
              >
                {item.title}
              </a>
            ))}
          </nav>

          {/* Language Switcher */}
          {showLanguageSwitcher && (
            <LanguageSwitcher
              language={language}
              onChangeLanguage={onChangeLanguage}
            />
          )}
        </div>
      </div>

      {/* =========================
          Mobile Navigation
      ========================== */}

      <div className="border-t border-white/10 px-6 pb-5 pt-4 lg:hidden">

        {/* Menu Mobile */}

        <nav className="flex flex-wrap items-center justify-center gap-5">

          {menu.map((item, index) => (
            <a
              key={index}
              href={item.link || "#"}
              onMouseEnter={() => setHoveredMenu(index)}
              onMouseLeave={() => setHoveredMenu(null)}
              style={{
                color:
                  hoveredMenu === index
                    ? hoverTextColor
                    : textColor,
                fontFamily: "Arial, sans-serif",
                transition: "all .3s ease",
                transform:
                  hoveredMenu === index
                    ? "scale(1.05)"
                    : "scale(1)",
              }}
              className="text-sm font-semibold"
            >
              {item.title}
            </a>
          ))}

        </nav>

        {/* Flag Mobile */}

        {showLanguageSwitcher && (
          <div className="mt-5 flex justify-center">
            <LanguageSwitcher
              language={language}
              onChangeLanguage={onChangeLanguage}
            />
          </div>
        )}

      </div>
    </header>
  );
}