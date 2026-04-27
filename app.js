let balance = 1000000000;
let currentBet = 1000000;
let userRank = "لاعب متميز";

// تتبع الجاكبوت اليومي لكل فئة رهان
let dailyJackpots = {
    "100000": false,
    "500000": false,
    "1000000": false,
    "5000000": false
};

const symbols = ["🍎", "🍒", "🍇", "💎", "7️⃣"];

function changeBet(amount) {
    currentBet = amount;
    document.getElementById('betDisplay').innerText = amount.toLocaleString();
    
    // تغيير شكل الزر النشط
    document.querySelectorAll('.bet-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

function open777() {
    document.getElementById('game777').style.display = 'flex';
}

function closeGame() {
    document.getElementById('game777').style.display = 'none';
}

function spin777() {
    if (balance < currentBet) {
        alert("سلطان أيهم، الرصيد غير كافٍ!");
        return;
    }

    balance -= currentBet;
    updateUI();

    // تأثير الدوران العشوائي
    const res1 = symbols[Math.floor(Math.random() * symbols.length)];
    const res2 = symbols[Math.floor(Math.random() * symbols.length)];
    const res3 = symbols[Math.floor(Math.random() * symbols.length)];

    document.getElementById('s1').innerText = res1;
    document.getElementById('s2').innerText = res2;
    document.getElementById('s3').innerText = res3;

    // منطق الفوز والجاكبوت
    if (res1 === "7️⃣" && res2 === "7️⃣" && res3 === "7️⃣") {
        if (!dailyJackpots[currentBet.toString()]) {
            let jackpot = currentBet * 100;
            balance += jackpot;
            dailyJackpots[currentBet.toString()] = true;
            alert("🔥 مبروك! فزت بالجاكبوت اليومي: " + jackpot.toLocaleString());
        } else {
            balance += currentBet * 10;
            alert("ثلاث سبعات! فوز كبير بـ 10 أضعاف (الجاكبوت تم أخذه مسبقاً)");
        }
    } else if (res1 === res2 && res2 === res3) {
        let win = currentBet * 5;
        balance += win;
        alert("فوز رائع بـ 5 أضعاف الرهان!");
    }

    updateUI();
}

function updateUI() {
    document.getElementById('darahemBalance').innerText = balance.toLocaleString();
    if (balance >= 1500000000) {
        userRank = "SVIP الملكي 👑";
        document.getElementById('user-rank').classList.add('svip-active');
    } else {
        userRank = "لاعب متميز";
        document.getElementById('user-rank').classList.remove('svip-active');
    }
    document.getElementById('user-rank').innerText = userRank;
}

function googleSignIn() {
    alert("جاري الاتصال بخدمات جوجل بلاي...");
}

function openStore() {
    alert("فتح متجر الدراهم... (Google In-App Purchase)");
}

// تشغيل الواجهة لأول مرة
updateUI();
