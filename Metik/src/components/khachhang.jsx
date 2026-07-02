import React from "react";
import Animation from "../components/animations";

const CustomerCard = ({ card, direction, avatarRadius }) => {

    const stars = "★".repeat(card.rating || 5);

    return (

        <Animation direction={direction}>

            <div style={styles.card}>

                {/* Avatar */}

                <div style={styles.avatarWrapper}>

                    <img
                        src={card.avatar}
                        alt={card.name}
                        style={{
                            ...styles.avatar,
                            borderRadius: avatarRadius,
                        }}
                    />

                </div>

                {/* Content */}

                <div style={styles.content}>

                    <div style={styles.rating}>
                        {stars}
                    </div>

                    <p style={styles.review}>
                        "{card.review}"
                    </p>

                    <p style={styles.name}>
                        {card.name}
                    </p>

                </div>

            </div>

        </Animation>

    );

};

const KhachHang = ({

    title,

    cards = [],

    gradientFrom,

    gradientTo,

    avatarSize,

    avatarRadius,

}) => {

    const displayCards = cards.slice(0, 2);

    return (

        <section
            style={{
                ...styles.wrapper,
                background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
            }}
        >

            <div style={styles.container}>

                {/* TITLE */}

                <div style={styles.titleWrapper}>

                    <h2 style={styles.title}>
                        {title}
                    </h2>

                    <div style={styles.underline} />

                </div>

                {/* ROW */}

                <div
                    className="khachhang-row"
                    style={styles.row}
                >

                    {displayCards.map((card, index) => (

                        <div
                            key={index}
                            style={styles.column}
                        >

                            <CustomerCard
                                card={card}
                                direction={index === 0 ? "left" : "right"}
                                avatarRadius={avatarRadius}
                                avatarSize={avatarSize}
                            />

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

};

export default KhachHang;

/* ================= STYLE ================= */

const styles = {

    wrapper: {
        width: "100%",
        padding: "80px 20px",
        boxSizing: "border-box",
    },

    container: {
        maxWidth: "1200px",
        margin: "0 auto",
    },

    /* TITLE */

    titleWrapper: {
        textAlign: "left",
        marginBottom: "50px",
        position: "relative",
    },

    title: {
        fontSize: "32px",
        fontWeight: "700",
        color: "#1f7a1f",
        margin: 0,
        display: "inline-block",
    },

    underline: {
        width: "120px",
        height: "6px",
        background: "#f4c542",
        marginTop: "10px",
        borderRadius: "4px",
        transform: "rotate(-3deg)",
    },

    /* ROW */

    row: {
        display: "flex",
        gap: "50px",
        alignItems: "stretch",
    },

    column: {
        flex: 1,
    },

    /* CARD */

    card: {
        display: "flex",
        alignItems: "center",
        gap: "24px",
        height: "100%",
        padding: "20px",
        borderRadius: "18px",
        transition: "all .35s ease",
    },

    avatarWrapper: {
        flexShrink: 0,
    },

    avatar: {
        width: "120px",
        height: "120px",
        objectFit: "cover",
        border: "4px solid #f4c542",
        transition: "transform .4s ease",
    },

    content: {
        flex: 1,
    },

    rating: {
        color: "#FFD700",
        fontSize: "24px",
        marginBottom: "12px",
        letterSpacing: "2px",
    },

    review: {
        margin: 0,
        color: "#666",
        fontSize: "18px",
        lineHeight: "1.8",
        fontStyle: "italic",
        textAlign: "justify",
    },

    name: {
        marginTop: "18px",
        marginBottom: 0,
        fontSize: "22px",
        fontWeight: "700",
        color: "#444",
    },

};

/* ================= RESPONSIVE ================= */

const styleSheet = `

.khachhang-row .animation-item{

    width:100%;

}

.khachhang-row .animation-item>div{

    height:100%;

}

.khachhang-row img{

    transition:transform .4s ease;

}

.khachhang-row img:hover{

    transform:scale(1.08);

}

.khachhang-row .animation-item>div:hover{

    transform:translateY(-6px);

}

@media (max-width:992px){

    .khachhang-row{

        flex-direction:column !important;

        gap:35px !important;

    }

}

@media (max-width:768px){

    .khachhang-row .animation-item>div{

        flex-direction:column !important;

        text-align:center;

        align-items:center;

    }

    .khachhang-row p{

        text-align:center !important;

    }

}
`;

if (typeof document !== "undefined") {

    if (!document.getElementById("khachhang-style")) {

        const style = document.createElement("style");

        style.id = "khachhang-style";

        style.innerHTML = styleSheet;

        document.head.appendChild(style);

    }

}