import React, { useState, useEffect } from "react";

export default function ScrollToTopButton() {
    const [backToTopButton, setBackToTopButton] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 150) {
                setBackToTopButton(true);
            } else {
                setBackToTopButton(false);
            }
        });
    }, []);

    const scrollUp = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div>
            {backToTopButton && (
                <button
                    style={{
                        position: "fixed",
                        bottom: "200px",
                        right: "20px",
                        height: "50px",
                        width: "50px",
                        fontSize: "50px",
                        backgroundColor: "transparent",
                        border: "none",
                    }}
                    onClick={scrollUp}
                >
                    <i class="fa-regular fa-circle-up"></i>
                </button>
            )}
        </div>
    );
}
