import React, { useEffect, useRef } from "react";

const Animation = ({
    children,
    direction = "left",
    duration = 800,
    delay = 0,
    distance = 80,
    once = true,
}) => {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    element.classList.add("animation-show");

                    if (once) {
                        observer.unobserve(element);
                    }
                } else if (!once) {
                    element.classList.remove("animation-show");
                }
            },
            {
                threshold: 0.2,
            }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [once]);

    const getTransform = () => {
        switch (direction) {
            case "right":
                return `translateX(${distance}px)`;

            case "up":
                return `translateY(${distance}px)`;

            case "down":
                return `translateY(-${distance}px)`;

            case "zoom":
                return "scale(0.85)";

            default:
                return `translateX(-${distance}px)`;
        }
    };

    return (
        <div
            ref={ref}
            className="animation-item"
            style={{
                opacity: 0,
                transform: getTransform(),
                transition: `all ${duration}ms ease ${delay}ms`,
            }}
        >
            {children}
        </div>
    );
};

export default Animation;

/* ================= CSS ================= */

const styleSheet = `
.animation-show{
    opacity:1 !important;
    transform:translateX(0) translateY(0) scale(1) !important;
}
`;

if (typeof document !== "undefined") {
    if (!document.getElementById("animation-style")) {
        const style = document.createElement("style");
        style.id = "animation-style";
        style.innerHTML = styleSheet;
        document.head.appendChild(style);
    }
}