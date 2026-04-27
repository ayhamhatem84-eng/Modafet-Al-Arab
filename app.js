// الأرصدة والبيانات الأساسية
let balance = 1000000000; // رصيد البداية: مليار
let userRank = "لاعب متميز";
let currentBet = 1000000; // الرهان الافتراضي: مليون
let currentGameName = "";
let isAutoSpin = false;
let autoSpinInterval;

// 1. وظيفة تغيير الرهان بناءً على طلبك
function changeBet(amount) {
    if (balance >= amount) {
        currentBet = amount;
        updateUIBet();
        console.log("تم تغيير الرهان إلى: " + amount.toLocaleString());
    } else {
        alert("لا تملك رصيداً كافياً لرفع الرهان لهذه القيمة!");
    }
}

// 2. وظيفة فتح شاشة اللعبة (الخطوة الأولى للعب الحقيقي)
function openGame(icon, name) {
    currentGameName = name;
    
    // تحديث محتويات شاشة اللعبة
    document.getElementById('gameScreenHeader').innerText = name;
    document.getElementById('gameVisual').innerText = icon;
    
    // إظهار الشاشة المنبثقة
    document.getElementById('gameOverlay').style.display = 'flex';
}

function closeGame() {
    // إخفاء الشاشة
    document.getElementById('gameOverlay').style.display = 'none';
    
    // إيقاف اللعب التلقائي إذا كان يعمل
    if (isAutoSpin) {
        toggleAuto();
    }
}

// 3. وظيفة اللعب (العادي)
function spin() {
    if (balance >= currentBet) {
        balance -= currentBet;
        
        // محاكاة عشوائية للفوز (سنقوم بتطويرها لكل لعبة لاحقاً)
        let win = Math.random() > 0.6; // فرصة فوز 40%
        if (win) {
            let prize = currentBet * 3; // جائزة: 3 أضعاف الرهان
            balance += prize;
            // يمكنك إضافة تأثير صوتي أو بصري هنا
        }
        
        updateUI();
    } else {
        alert("الرصيد غير كافٍ! قم بتقليل الرهان أو اشحن رصيدك.");
        if (isAutoSpin) toggleAuto(); // إيقاف التلقائي
    }
}

// 4. وظيفة اللعب التلقائي (السرعة)
function toggleAuto() {
    const autoBtn = document.querySelector('.auto-btn');
    const spinBtn = document.querySelector('.spin-btn');

    if (!isAutoSpin) {
        // تشغيل اللعب التلقائي
        isAutoSpin = true;
        autoBtn.innerText = "إيقاف التلقائي";
        autoBtn.style.background = "#b71c1c"; // لون أحمر للإيقاف
        spinBtn.disabled = true; // تعطيل زر اللعب العادي
        
        // اللعب مرة كل ثانية
        autoSpinInterval = setInterval(spin, 1000); 
    } else {
        // إيقاف اللعب التلقائي
        isAutoSpin = false;
        autoBtn.innerText = "لعب تلقائي";
        autoBtn.style.background = "#333"; // عودة للون الأصلي
        spinBtn.disabled = false;
        
        clearInterval(autoSpinInterval);
    }
}

// تحديث الواجهة (الرصيد والترتبة)
function updateUI() {
    const darahemElem = document.getElementById('darahemBalance');
    const rankElem = document.getElementById('user-rank');
    
    darahemElem.innerText = balance.toLocaleString();
    
    // نظام الـ SVIP: يصبح ذهبياً إذا تعدى المليار ونصف
    if (balance >= 1500000000) {
        userRank = "SVIP الملكي 👑";
        rankElem.classList.add('svip-active');
    } else {
        userRank = "لاعب متميز";
        rankElem.classList.remove('svip-active');
    }
    rankElem.innerText = userRank;
}

// تحديث الواجهة (قيمة الرهان)
function updateUIBet() {
    document.getElementById('betDisplay').innerText = currentBet.toLocaleString();
}

// تشغيل التحديث الأولي عند تحميل الصفحة
updateUI();
updateUIBet();
