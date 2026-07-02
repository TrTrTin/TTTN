import React from "react";
import AdminSection from "./admin-section";
import AdminText from "./admin-text";

const Components3 = ({

gradientFrom,
gradientTo,
cards = []
}) => {
return (
<div
      style={{
        minHeight: '600px'
      }}
    >

<AdminSection
  background={{
    type: "gradient",
    fromColor: gradientFrom,
    toColor: gradientTo,
    direction: "to bottom right"
  }}
  padding="60px 20px"
>
  <div
    style={{
      minHeight: "600px",
      display: "flex",
      alignItems: "center"
    }}
  >
    <div
      style={{
        maxWidth: "1280px",
        width: "100%",
        margin: "0 auto"
      }}
    >
   
  
    {/* CARDS */}
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(480px,1fr))",
        gap: "50px"
      }}
    >
      {cards.map((card, index) => (
        <div
          key={index}
          style={{
            background:
              card.cardBgColor || "#ffffff",

            borderRadius:
              `${card.cardRadius || 20}px`,

            padding:
              `${card.cardPadding || 50}px`,

            boxShadow:
              "0 10px 25px rgba(0,0,0,0.08)",

            minHeight: "420px"
          }}
        >
          {/* TITLE */}
          <h3
            style={{
              color:
                card.titleColor || "#1f4b89",

              fontSize:
                `${card.titleSize || 36}px`,

              fontWeight: 700,

              marginBottom: "20px"
            }}
          >
            {card.title}
          </h3>

          {/* CONTENT */}
          {card.content && (
            <div
              style={{
                color:
                  card.contentColor || "#333",

                fontSize:
                  `${card.contentSize || 18}px`,

                marginBottom: "20px"
              }}
            >
              <AdminText
                content={card.content}
              />
            </div>
          )}

          {/* IMAGE */}
          {card.image && (
            <div
              style={{
                marginBottom: "24px"
              }}
            >
              <img
                src={card.image}
                alt={card.title}
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  display: "block"
                }}
              />
            </div>
          )}

          {/* MEMBERS */}
          {card.members &&
            card.members.length > 0 && (
              <div>

                {card.members.map(
                  (member, idx) => (
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "20px",
                            paddingBottom: "20px",
                            marginBottom: "20px",
                            borderBottom: "1px solid #eee"
                        }}
                        >
                      <img
                        src={member.avatar}
                        alt={
                          member.fullName
                        }
                        style={{
                          width:
                            `${member.avatarSize || 100}px`,

                          height:
                            `${member.avatarSize || 100}px`,

                          borderRadius:
                            "50%",

                          objectFit:
                            "cover",

                          flexShrink: 0
                        }}
                      />

                      <div>

                        <div
                          style={{
                            color:
                              member.fullNameColor ||
                              "#1f4b89",

                            fontSize:
                              `${member.fullNameSize || 20}px`,

                            fontWeight:
                              700,

                            marginBottom:
                              "6px"
                          }}
                        >
                          {
                            member.fullName
                          }
                        </div>

                        <div
                          style={{
                            color:
                              member.clubPositionColor ||
                              "#333",

                            fontSize:
                              `${member.clubPositionSize || 17}px`
                          }}
                        >
                          {
                            member.clubPosition
                          }
                        </div>

                        <div
                          style={{
                            color:
                              member.companyPositionColor ||
                              "#333",

                            fontSize:
                              `${member.companyPositionSize || 17}px`
                          }}
                        >
                          {
                            member.companyPosition
                          }
                        </div>

                        <div
                          style={{
                            color:
                              member.companyNameColor ||
                              "#333",

                            fontSize:
                              `${member.companyNameSize || 17}px`
                          }}
                        >
                          {
                            member.companyName
                          }
                        </div>

                      </div>
                    </div>
                  )
                )}

              </div>
            )}
        </div>
      ))}
    </div>
      
      </div>
  </div>
</AdminSection>

</div>
);
};

export default Components3;