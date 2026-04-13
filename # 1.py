# 1. PayGo faylı yaratmaq
open("paygo.txt", "w").write("PayGo system started")

# 2. Fayla balans yazmaq
open("paygo.txt", "a").write("\nBalance: 100")

# 3. Fayldan oxumaq
data = open("paygo.txt", "r").read()
print(data)

# 4. Balansı dəyişənə yazmaq
balance = 100

# 5. Xərcləmə funksiyası
def spend(balance, amount):
    return balance - amount

# 6. Balansdan 10 çıxmaq
balance = spend(balance, 10)

# 7. Yeni balansı çap etmək
print(balance)

# 8. PayGo istifadəçisi
user = {"name": "PayGoUser", "balance": 50}

# 9. Balans yoxlama
if user["balance"] > 0:
    print("Istifadə aktivdir")

# 10. Xəta mesajı
if user["balance"] <= 0:
    print("Balans bitib")

# 11. Ödəniş əlavə etmə
user["balance"] += 20

# 12. Ödənişi fayla yazmaq
open("paygo.txt", "a").write("\nTopup: 20")

# 13. Vaxtı qeyd etmək
import time
print(time.time())

# 14. PayGo log faylı
log = open("paygo_log.txt", "w")
log.wri
