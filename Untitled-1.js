// 1. İstifadəçi məlumatı
let user = { name: "PayGoUser", balance: 50 };

// 2. Balansı göstər
function showBalance(user) {
    console.log("Balans:", user.balance);
}

// 3. Ödəniş funksiyası
function spend(user, amount) {
    if (user.balance >= amount) {
        user.balance -= amount;
        console.log(amount, "manat xərcləndi.");
    } else {
        console.log("Balans kifayət etmir!");
    }
}

// 4. Balans artırma
function topUp(user, amount) {
    user.balance += amount;
    console.log(amount, "manat əlavə olundu.");
}

// 5. Log faylı simulasiya
let logs = [];
function addLog(action) {
    logs.push(action);
}

// 6. İstifadə funksiyası
spend(user, 20);
addLog("20 manat xərcləndi");

// 7. Balansı göstər
showBalance(user);

// 8. Top up
topUp(user, 30);
addLog("30 manat əlavə olundu");

// 9. Logları göstər
console.log("Logs:", logs);
