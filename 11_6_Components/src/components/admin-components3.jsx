import React from "react";
import AdminSection from "./admin-section";
import AdminText from "./admin-text";

const Components3 = ({

gradientFrom,
gradientTo,
cards = []
}) => {
return (
<AdminSection
background={{
type: "gradient",
fromColor: gradientFrom,
toColor: gradientTo,
direction: "to bottom right"
}}
padding="30px 20px"
> <div
  style={{
    maxWidth: "1100px",
    margin: "0 auto"
  }}
>

   
  
    {/* CARDS */}
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
"repeat(auto-fit,minmax(380px,1fr))",
        gap: "30px"
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
              `${card.cardPadding || 30}px`,

            boxShadow:
              "0 10px 25px rgba(0,0,0,0.08)",

            minHeight: "auto"
          }}
        >
          {/* TITLE */}
          <h3
            style={{
              color:
                card.titleColor || "#1f4b89",

              fontSize:
                `${card.titleSize || 30}px`,

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
                  `${card.contentSize || 16}px`,

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
                            `${member.avatarSize || 80}px`,

                          height:
                            `${member.avatarSize || 80}px`,

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
                              `${member.fullNameSize || 18}px`,

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
                              `${member.clubPositionSize || 15}px`
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
                              `${member.companyPositionSize || 15}px`
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
                              `${member.companyNameSize || 15}px`
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
</AdminSection>


);
};

export default Components3;
