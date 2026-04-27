// تتبع الجاكبوت لكل فئة رهان اليوم
let dailyJackpotsClaimed = {
    "100000": false,
    "500000": false,
    "1000000": false,
    "5000000": false
};

function checkJackpot(betAmount) {
    // إذا لم يربح الجاكبوت لهذا الرهان اليوم
    if (!dailyJackpotsClaimed[betAmount]) {
        let luckyNumber = Math.floor(Math.random() * 1000); // نسبة 1 من 1000
        if (luckyNumber === 777) {
            let jackpotPrize = betAmount * 100; // الجائزة 100 ضعف الرهان
            balance += jackpotPrize;
            dailyJackpotsClaimed[betAmount] = true; // تم الربح لهذا الرهان اليوم
            alert("🎊 مبروك! لقد فزت بالجاكبوت اليومي لرهان " + betAmount.toLocaleString());
            return true;
        }
    }
    return false;
}
