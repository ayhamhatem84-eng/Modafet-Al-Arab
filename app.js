let balance = 1000000000;
let redDiamonds = 0;

function toggleGiftMenu() {
    const menu = document.getElementById('gift-menu');
    if (menu) {
        if (menu.style.display === "none" || menu.style.display === "") {
            menu.style.display = "block";
        } else {
            menu.style.display = "none";
        }
    }
}

function sendGift(price, giftName) {
    if (balance >= price) {
        balance -= price;
        redDiamonds += (price * 0.65);
        updateUI();
        alert("تم إرسال " + giftName + " بنجاح! 🚀");
        toggleGiftMenu(); 
    } else {
        alert("عذراً سلطان أيهم، الرصيد غير كافٍ!");
    }
}

function updateUI() {
    const dBalance = document.getElementById('darahemBalance');
    const rDiamonds = document.getElementById('diamondBalance');
    if (dBalance && rDiamonds) {
        dBalance.innerText = balance.toLocaleString();
        rDiamonds.innerText = redDiamonds.toLocaleString();
    }
}
