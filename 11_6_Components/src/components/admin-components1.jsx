import React from 'react';
import AdminSection from '../components/admin-section';
import AdminText from '../components/admin-text';

const Components1 = (props) => {

  const {
    backgroundImage,
    positionX,
    paddingLeft,
    paddingTop,

    cardWidth,
    cardHeight,
    cardBgOpacity,
    cardBlur,
    cardPadding,
    radiusTL,
    radiusTR,
    radiusBR,
    radiusBL,

    titleLine,
    titleLineColor,
    titleLineSize,

    title,
    titleColor,
    titleSize,

    description,
    descriptionColor,
    descriptionSize,

    buttonText,
    buttonColor,
    buttonSize
  } = props;

  const positionClass = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end"
  };

  const buttonSizeClass = {
    sm: "px-6 py-2 text-sm",
    md: "px-10 py-4 text-base",
    lg: "px-14 py-5 text-lg"
  };

  return (
    <AdminSection
      container="2xl"
      padding_x={0}
      padding_y={0}
      background={{
        type: 'image',
        bg_image: backgroundImage
      }}
    >

      {/* ✅ FIXED WRAPPER */}
      <div
        className={`
          relative z-10 flex items-start pt-24
          ${positionClass[positionX]}
        `}
        style={{
          paddingLeft: `${paddingLeft}px`,
          paddingTop: `${paddingTop}px`
        }}
      >

        {/* CARD */}
        <div
          style={{
            width: `${cardWidth ?? 420}px`,
            height: `${cardHeight ?? 280}px`,
            padding: `${cardPadding ?? 28}px`,
            backgroundColor: `rgba(255,255,255,${cardBgOpacity ?? 0.12})`,
            backdropFilter: `blur(${cardBlur ?? 16}px)`,

            borderTopLeftRadius: `${radiusTL ?? 10}px`,
            borderTopRightRadius: `${radiusTR ?? 80}px`,
            borderBottomRightRadius: `${radiusBR ?? 10}px`,
            borderBottomLeftRadius: `${radiusBL ?? 90}px`,
          }}
          className="border border-white/20 shadow-2xl"
        >

          <div style={{ color: titleLineColor, fontSize: `${titleLineSize}px` }}>
            <AdminText content={titleLine} />
          </div>

          <h1
            className="font-bold mt-4"
            style={{
              color: titleColor,
              fontSize: `${titleSize}px`
            }}
          >
            {title}
          </h1>

          <div
            className="mt-6"
            style={{
              color: descriptionColor,
              fontSize: `${descriptionSize}px`
            }}
          >
            <AdminText content={description} />
          </div>

          <div className="mt-8 flex justify-center">
            <button
              style={{
                    padding:
                    buttonSize === 'sm'
                        ? '8px 16px'
                        : buttonSize === 'lg'
                        ? '18px 32px'
                        : '12px 24px',

                    fontSize:
                    buttonSize === 'sm'
                        ? '14px'
                        : buttonSize === 'lg'
                        ? '18px'
                        : '16px',

                    backgroundColor: buttonColor || '#06b6d4',
                    borderRadius: '9999px',
                    color: 'white',
                    fontWeight: 600,
                    transition: 'all 0.2s'
                }}
            >
              {buttonText}
            </button>
          </div>

        </div>

      </div>

    </AdminSection>
  );
};

export default Components1;