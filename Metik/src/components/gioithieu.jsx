import React from "react";
import Animation from "../components/animations";

const ContentRow = ({
    image,
    text,
    bullets = [],
    reverse = false,
    radius,
}) => {
    const imageContent = (
        <Animation direction={reverse ? "right" : "left"}>
            <div style={styles.imageWrapper}>
                <img
                    src={image}
                    alt=""
                    style={{
                        ...styles.image,
                        borderRadius: radius,
                    }}
                />
            </div>
        </Animation>
    );

    const textContent = (
        <Animation direction={reverse ? "left" : "right"}>
            <div style={styles.textWrapper}>
                {bullets.length > 0 ? (
                    <ul style={styles.list}>
                        {bullets.map((item, index) => (
                            <li key={index} style={styles.listItem}>
                                {item}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p style={styles.text}>
                        {text}
                    </p>
                )}
            </div>
        </Animation>
    );

    return (
        <div
            className="gioithieu-row"
            style={styles.row}
        >
            {reverse ? (
                <>
                    {textContent}
                    {imageContent}
                </>
            ) : (
                <>
                    {imageContent}
                    {textContent}
                </>
            )}
        </div>
    );
};

const GioiThieu = ({
    title,
    subtitle,

    image1,
    text1,

    image2,
    bulletItems = [],

    image3,
    text3,

    gradientFrom,
    gradientTo,

    radiusTopLeft,
    radiusTopRight,
    radiusBottomRight,
    radiusBottomLeft,
}) => {

    const imageRadius =
        `${radiusTopLeft}px ${radiusTopRight}px ${radiusBottomRight}px ${radiusBottomLeft}px`;

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

                {/* SUBTITLE */}

                <div style={styles.subtitleWrapper}>
                    <p style={styles.subtitle}>
                        {subtitle}
                    </p>
                </div>

                {/* ROW 1 */}

                <ContentRow
                    image={image1}
                    text={text1}
                    radius={imageRadius}
                />

                {/* ROW 2 */}

                <ContentRow
                    reverse
                    image={image2}
                    bullets={bulletItems}
                    radius={imageRadius}
                />

                {/* ROW 3 */}

                <ContentRow
                    image={image3}
                    text={text3}
                    radius={imageRadius}
                />

            </div>

        </section>
    );
};

export default GioiThieu;

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
        marginBottom: "35px",
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

    /* SUBTITLE */

    subtitleWrapper: {
        marginBottom: "70px",
    },

    subtitle: {
        fontSize: "18px",
        color: "#666",
        lineHeight: "1.9",
        margin: 0,
        textAlign: "justify",
    },

    /* ROW */

    row: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "60px",
        marginBottom: "90px",
    },

    imageWrapper: {
        flex: 1,
    },

    image: {
        width: "100%",
        display: "block",
        objectFit: "cover",
        boxShadow: "0 12px 30px rgba(0,0,0,.12)",
        transition: "transform .5s ease",
    },

    textWrapper: {
        flex: 1,
    },

    text: {
        margin: 0,
        color: "#666",
        fontSize: "18px",
        lineHeight: "1.9",
        textAlign: "justify",
    },

    list: {
        margin: 0,
        paddingLeft: "24px",
    },

    listItem: {
        fontSize: "18px",
        color: "#666",
        lineHeight: "1.9",
        marginBottom: "18px",
    },
};

/* ================= RESPONSIVE ================= */

const styleSheet = `

.gioithieu-row img{
    transition:transform .5s ease;
}

.gioithieu-row img:hover{
    transform:scale(1.05);
}

@media (max-width:992px){

    .gioithieu-row{
        flex-direction:column !important;
        gap:40px !important;
        margin-bottom:70px !important;
    }

    .gioithieu-row > div{
        width:100%;
    }

}

@media (max-width:768px){

    .gioithieu-row{
        gap:30px !important;
    }

}

`;

if (typeof document !== "undefined") {

    if (!document.getElementById("gioithieu-style")) {

        const style = document.createElement("style");

        style.id = "gioithieu-style";

        style.innerHTML = styleSheet;

        document.head.appendChild(style);

    }

}