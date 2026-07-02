import React from "react";

const NewProduct = ({ title = "New Products", items = [] }) => {
    return (
        <section style={styles.wrapper}>
            {/* Title */}
            <div style={styles.titleWrapper}>
                <h2 style={styles.title}>{title}</h2>
                <div style={styles.underline} />
            </div>

            {/* Grid */}
            <div style={styles.grid}>
                {items.map((item, index) => (
                    <a
                        key={index}
                        href={item.link || "#"}
                        style={styles.card}
                        className="newproduct-card"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div style={styles.imageWrapper}>
                            <img src={item.image} alt={item.title} style={styles.image} />
                        </div>

                        <div style={styles.itemTitle}>{item.title}</div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default NewProduct;

/* ================= STYLE ================= */
const styles = {
    wrapper: {
        width: "100%",
        padding: "60px 20px",
        background: "linear-gradient(135deg, #f5d7a1 0%, #ffffff 60%)",
        boxSizing: "border-box",
    },

    /* TITLE */
    titleWrapper: {
        textAlign: "left",
        marginBottom: "40px",
        position: "relative",
    },

    title: {
        fontSize: "32px",
        fontWeight: "700",
        color: "#1f7a1f",
        margin: 0,
        display: "inline-block",
        position: "relative",
    },

    underline: {
        width: "120px",
        height: "6px",
        background: "#f4c542",
        marginTop: "10px",
        borderRadius: "4px",
        transform: "rotate(-3deg)",
    },

    /* GRID */
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px",
    },

    card: {
        textDecoration: "none",
        color: "inherit",
        background: "#fff",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
        transition: "transform 0.2s ease",
    },

    imageWrapper: {
        width: "100%",
        height: "180px",
        overflow: "hidden",
    },

    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        transition: "transform 0.5s cubic-bezier(0.25, 1, 0.3, 1)",
    },
    itemTitle: {
        padding: "12px",
        fontSize: "16px",
        fontWeight: "500",
        textAlign: "center",
        color: "#f4c542",
    },
};

/* ================= RESPONSIVE (inject) ================= */
const styleSheet = `
.newproduct-card:hover img {
  transform: scale(1.25);
}

.newproduct-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.newproduct-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.15);
}
`;

if (typeof document !== "undefined") {
    const style = document.createElement("style");
    style.innerHTML = styleSheet;
    document.head.appendChild(style);
}