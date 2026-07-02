import React from "react";


export default function Header({
  logo,
  logoLink,

  menu = [],

  socials = [],

  backgroundColor,
  textColor,
}) {
  return (
    <>
      <header
        style={{
          background: backgroundColor,
          padding: "18px 40px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div className="header-container">

          {/* Logo */}

          <div className="header-logo">
            <a href={logoLink}>
              <img src={logo} alt="" />
            </a>
          </div>

          {/* Menu */}

          <div className="header-menu">
            {menu.map((item, index) => (
                <a
                key={index}
                href={item.link}
                style={{ color: textColor }}
                >
                <span
                    contentEditable
                    suppressContentEditableWarning
                >
                    {item.title}
                </span>
                </a>
            ))}
            </div>

          {/* Social */}

          <div className="header-social">
            {socials.map((item, index) => (
                <a
                key={index}
                href={item.link}
                >
                <img
                    src={item.image}
                    alt={item.alt}
                />
                </a>
            ))}
            </div>
        </div>
      </header>

      <style>{`
        .header-container{
            display:flex;
            align-items:center;
            justify-content:space-between;
            gap:30px;
            max-width:1400px;
            max-height:150px;
            margin:auto;
            flex-wrap:wrap;
        }

        .header-logo img{
            width:200px;
            height: 90px;
            object-fit:contain;
        }

        .header-menu{
            display:flex;
            gap:28px;
            flex:1;
            justify-content:center;
            flex-wrap:wrap;
        }

        .header-menu a{
            text-decoration:none;
            font-size:24px;
            font-weight:500;
            position:relative;
            transition:.3s;
            padding-bottom:5px;
        }

        .header-menu a::after{
            content:'';
            position:absolute;
            left:0;
            bottom:0;
            width:0%;
            height:2px;
            background:#FFD700;
            transition:.3s;
        }

        .header-menu a:hover::after{
            width:100%;
        }

        .header-social{
            display:flex;
            gap:18px;
            align-items:center;
        }

        .header-social img{
            width:36px;
            height:36px;
            object-fit:contain;
            transition:.3s;
            border-radius: 50%;
            padding: 6px;
              
        }

        .header-social img:hover{
            transform:scale(1.1);
        }

        @media(max-width:768px){

            .header-container{
                flex-direction:column;
                text-align:center;
            }

            .header-menu{
                justify-content:center;
            }

            .header-social{
                justify-content:center;
            }

        }
      `}</style>
    </>
  );
}