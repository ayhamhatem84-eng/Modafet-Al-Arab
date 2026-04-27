let balance = 1000000000;
let userRank = "لاعب متميز";

function playGame(gameName) {
    let bet = 1000000; // قيمة الرهان لكل لعبة
    if (balance >= bet) {
        balance -= bet;
        // محاكاة الفوز والخسارة بشكل عشوائي
        let win = Math.random() > 0.5; 
        if (win) {
            let prize = bet * 2;
            balance += prize;
            alert("مبروك! فزت في لعبة " + gameName + " وحصلت على " + prize.toLocaleString() + " درهم 💰");
        } else {
            alert("حظ أوفر في المرة القادمة في لعبة " + gameName);
        }
        updateUI();
    } else {
        alert("عذراً سلطان أيهم، الرصيد غير كافٍ للعب!");
    }
}

function updateUI() {
    document.getElementById('darahemBalance').innerText = balance.toLocaleString();
    if (balance >= 1500000000) {
        userRank = "SVIP الملكي 👑";
        document.getElementById('user-rank').style.color = "#d4af37";
    }
    document.getElementById('user-rank').innerText = userRank;
}
