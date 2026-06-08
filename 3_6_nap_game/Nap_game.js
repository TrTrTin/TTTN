// =====================================
// NAP GAME - JAVASCRIPT
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    initHeaderMenu();
    initCategoryButtons();
    initGameSearch();
    initGameCards();
    initHistoryButton();
    initLoginButton();
    initScrollAnimation();

});

// =====================================
// TOAST MESSAGE
// =====================================

function showToast(message) {

    const toast = document.createElement("div");

    toast.className = "toast-message";
    toast.innerText = message;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("show");
    }, 100);

    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(() => {
            toast.remove();
        }, 300);

    }, 2500);

}

// =====================================
// HEADER MENU
// =====================================

function initHeaderMenu() {

    const menuItems = document.querySelectorAll("nav a");

    menuItems.forEach(item => {

        item.addEventListener("click", function(e) {

            e.preventDefault();

            menuItems.forEach(link => {
                link.classList.remove("active");
            });

            this.classList.add("active");

            showToast(`Đã chọn: ${this.innerText}`);

        });

        item.addEventListener("mouseenter", () => {

            item.style.transform = "translateY(-2px)";
            item.style.transition = "0.3s";

        });

        item.addEventListener("mouseleave", () => {

            item.style.transform = "translateY(0px)";

        });

    });

}

// =====================================
// DANH MỤC GAME
// =====================================

function initCategoryButtons() {

    const categories =
        document.querySelectorAll(".category");

    categories.forEach(button => {

        button.addEventListener("click", () => {

            categories.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            button.animate(
                [
                    { transform: "scale(1)" },
                    { transform: "scale(1.08)" },
                    { transform: "scale(1)" }
                ],
                {
                    duration: 300
                }
            );

            showToast(
                `Danh mục: ${button.innerText}`
            );

        });

    });

}

// =====================================
// TÌM KIẾM GAME
// =====================================

function initGameSearch() {

    const searchInput =
        document.getElementById("searchInput");

    if (!searchInput) return;

    searchInput.addEventListener("keyup", function() {

        const keyword =
            this.value.toLowerCase();

        const games =
            document.querySelectorAll(".game-card");

        games.forEach(game => {

            const gameName =
                game.querySelector("h4")
                .innerText
                .toLowerCase();

            if (gameName.includes(keyword)) {

                game.style.display = "block";

            } else {

                game.style.display = "none";

            }

        });

    });

}

// =====================================
// GAME CARD
// =====================================

function initGameCards() {

    const cards =
        document.querySelectorAll(".game-card-img");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform =
                "translateY(-10px) scale(1.05)";

            card.style.transition =
                "all .3s ease";

            card.style.cursor = "pointer";

            card.style.boxShadow =
                "0 12px 20px rgba(0,0,0,.2)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "translateY(0px) scale(1)";

            card.style.boxShadow = "none";

        });

        
    });

}

// =====================================
// NÚT LỊCH SỬ GIAO DỊCH
// =====================================

function initHistoryButton() {

    const historyBtn =
        document.querySelector(".history-btn");

    if (!historyBtn) return;

    historyBtn.addEventListener("click", () => {

        historyBtn.animate(
            [
                { transform: "scale(1)" },
                { transform: "scale(0.95)" },
                { transform: "scale(1)" }
            ],
            {
                duration: 250
            }
        );

        showToast(
            "Đang mở lịch sử giao dịch..."
        );

    });

}

// =====================================
// NÚT ĐĂNG NHẬP
// =====================================

function initLoginButton() {

    const loginBtn =
        document.querySelector(".login-btn");

    if (!loginBtn) return;

    loginBtn.addEventListener("click", () => {

        loginBtn.animate(
            [
                { transform: "scale(1)" },
                { transform: "scale(1.1)" },
                { transform: "scale(1)" }
            ],
            {
                duration: 300
            }
        );

        showToast(
            "Chuyển đến trang đăng nhập..."
        );

    });

}

// =====================================
// HIỆU ỨNG XUẤT HIỆN KHI SCROLL
// =====================================

function initScrollAnimation() {

    const cards =
        document.querySelectorAll(".game-card");

    const observer =
        new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show-card"
                    );

                }

            });

        }, {
            threshold: 0.15
        });

    cards.forEach(card => {

        card.classList.add("hidden-card");

        observer.observe(card);

    });

}








function initLoginButton() {

    const loginBtn =
        document.querySelector(".login-btn");

    if (!loginBtn) return;

    loginBtn.addEventListener("click", () => {

        loginBtn.animate(
            [
                { transform: "scale(1)" },
                { transform: "scale(1.1)" },
                { transform: "scale(1)" }
            ],
            {
                duration: 300
            }
        );

        setTimeout(() => {

            const accountHTML = `
                <div class="user-info">
                    <div class="avatar">
                        😊
                    </div>

                    <div class="user-detail">
                        <div class="username">
                            myepro01
                        </div>
                        <div class="userid">
                            MyE ID: 00123
                        </div>
                    </div>

                    <div class="coin-box">
                        🪙 <span>1000</span>
                    </div>
                </div>
            `;

            loginBtn.outerHTML = accountHTML;

            showToast("Đăng nhập thành công!");

        }, 250);

    });

}