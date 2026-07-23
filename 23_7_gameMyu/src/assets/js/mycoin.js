// =====================================
// NAPGAME.JS
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    initHeaderMenu();
    initCategoryButtons();
    initGameSearch();
    initHistoryButton();
    initLoginButton();
    initScrollAnimation();
    initGameCardLinks();

});

// =====================================
// TOAST
// =====================================

function showToast(message){

    const toast = document.createElement("div");

    toast.className = "toast-message";

    toast.innerText = message;

    document.body.appendChild(toast);

    setTimeout(()=>{

        toast.classList.add("show");

    },100);

    setTimeout(()=>{

        toast.classList.remove("show");

        setTimeout(()=>{

            toast.remove();

        },300);

    },2500);

}

// =====================================
// HEADER
// =====================================

function initHeaderMenu(){

    const menuItems = document.querySelectorAll("nav a");

    menuItems.forEach(item=>{

        item.addEventListener("click",e=>{

            e.preventDefault();

            menuItems.forEach(link=>{

                link.classList.remove("active");

            });

            item.classList.add("active");

            showToast(`Đã chọn: ${item.innerText}`);

        });

    });

}

// =====================================
// CATEGORY
// =====================================

function initCategoryButtons(){

    const buttons = document.querySelectorAll(".category");

    buttons.forEach(button=>{

        button.addEventListener("click",()=>{

            buttons.forEach(btn=>{

                btn.classList.remove("active");

            });

            button.classList.add("active");

            button.animate(
                [
                    {transform:"scale(1)"},
                    {transform:"scale(1.08)"},
                    {transform:"scale(1)"}
                ],
                {
                    duration:300
                }
            );

            showToast(`Danh mục: ${button.innerText}`);

        });

    });

}

// =====================================
// SEARCH
// =====================================

function initGameSearch(){

    const input = document.getElementById("searchInput");

    if(!input) return;

    input.addEventListener("keyup",()=>{

        const keyword = input.value.toLowerCase();

        document.querySelectorAll(".game-card").forEach(card=>{

            const name = card.querySelector("h4").innerText.toLowerCase();

            card.parentElement.style.display =
                name.includes(keyword) ? "" : "none";

        });

    });

}

// =====================================
// HISTORY BUTTON
// =====================================

function initHistoryButton(){

    const button = document.querySelector(".history-btn");

    if(!button) return;

    button.addEventListener("click",()=>{

        button.animate(
            [
                {transform:"scale(1)"},
                {transform:"scale(.95)"},
                {transform:"scale(1)"}
            ],
            {
                duration:250
            }
        );

        showToast("Đang mở lịch sử giao dịch...");

    });

}

// =====================================
// LOGIN
// =====================================

function initLoginButton(){

    const loginBtn = document.querySelector(".login-btn");

    if(!loginBtn) return;

    loginBtn.addEventListener("click",()=>{

        loginBtn.animate(
            [
                {transform:"scale(1)"},
                {transform:"scale(1.08)"},
                {transform:"scale(1)"}
            ],
            {
                duration:300
            }
        );

        setTimeout(()=>{

            const account = document.createElement("div");
            account.className = "user-info";
            account.innerHTML = `
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
                <img src="../assets/images/coin_M.png" alt="Coin" class="coin-icon">
                <span>1000</span>
            `;
            loginBtn.replaceWith(account);
            showToast("Đăng nhập thành công!");
        },250);
    });
}

