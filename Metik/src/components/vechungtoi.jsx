import React from "react";
import Animation from "../components/animations";

const getEmbedUrl = (url = "") => {
    if (!url) return "";

    if (url.includes("/embed/")) {
        return url;
    }

    const shortMatch = url.match(/youtu\.be\/([^?&]+)/);

    if (shortMatch) {
        return `https://www.youtube.com/embed/${shortMatch[1]}`;
    }

    const watchMatch = url.match(/[?&]v=([^&]+)/);

    if (watchMatch) {
        return `https://www.youtube.com/embed/${watchMatch[1]}`;
    }

    return url;
};

const VeChungToi = ({
    title,

    paragraph1,
    paragraph2,

    videoLink,

    gradientFrom,
    gradientTo,

    radiusTopLeft,
    radiusTopRight,
    radiusBottomRight,
    radiusBottomLeft,
}) => {

    const radius =
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

                {/* CONTENT */}

                <div
                    className="vechungtoi-row"
                    style={styles.row}
                >

                    {/* LEFT */}

                    <Animation direction="left">

                        <div style={styles.textWrapper}>

                            <p style={styles.text}>
                                {paragraph1}
                            </p>

                            <p
                                style={{
                                    ...styles.text,
                                    marginTop: "30px",
                                }}
                            >
                                {paragraph2}
                            </p>

                        </div>

                    </Animation>

                    {/* RIGHT */}

                    <Animation direction="right">

                        <div className="video-card" style={styles.videoWrapper}>

                            <iframe
                                src={getEmbedUrl(videoLink)}
                                title="Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                style={{
                                    ...styles.video,
                                    borderRadius: radius,
                                }}
                            />

                        </div>

                    </Animation>

                </div>

            </div>
        </section>
    );
};

export default VeChungToi;

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

    /* CONTENT */

    row: {
        display: "flex",
        alignItems: "center",
        gap: "60px",
    },

    textWrapper: {
        flex: 1,
    },

    text: {
        margin: 0,
        fontSize: "18px",
        color: "#666",
        lineHeight: "1.9",
        textAlign: "justify",
    },

    videoWrapper: {
        flex: 1,
        overflow: "hidden",
        boxShadow: "0 12px 30px rgba(0,0,0,.12)",
        transition: "transform .4s ease",
    },

    video: {
    width: "100%",
    aspectRatio: "16 / 9",
    minHeight: "420px",
    border: "none",
    display: "block",
    }

};

/* ================= RESPONSIVE ================= */

const styleSheet = `

.video-card{
    transition:transform .4s ease;
}

.video-card:hover{
    transform:scale(1.02);
}

@media (max-width:992px){

    .vechungtoi-row{

        flex-direction:column !important;

        gap:40px !important;

    }

    .vechungtoi-row>div{

        width:100%;

    }

}

@media (max-width:768px){

    .vechungtoi-row{

        gap:30px !important;

    }

}
`;

if (typeof document !== "undefined") {

    if (!document.getElementById("vechungtoi-style")) {

        const style = document.createElement("style");

        style.id = "vechungtoi-style";

        style.innerHTML = styleSheet;

        document.head.appendChild(style);

    }

}