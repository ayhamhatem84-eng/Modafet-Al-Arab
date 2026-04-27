function toggleGiftMenu() {
    const menu = document.getElementById('gift-menu');
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

let balance = 1000000000;
let redDiamonds = 0;

function sendGift(price) {
    if (balance >= price) {
        balance -= price;
        redDiamonds += (price * 0.65); // الضيف يحصل على 65%
        updateUI();
        console.log("تم خصم الضريبة 35% لصالح السلطان أيهم");
    } else {
        alert("الرصيد غير كافٍ!");
    }
}

function updateUI() {
    document.getElementById('darahemBalance').innerText = balance.toLocaleString();
    document.getElementById('diamondBalance').innerText = redDiamonds.toLocaleString();
}
