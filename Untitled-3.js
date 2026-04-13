let userId = localStorage.getItem("userId");

function login() {
  userId = document.getElementById("userId").value;
  localStorage.setItem("userId", userId);
  window.location = "dashboard.html";
}

async function sendMoney() {
  const to = document.getElementById("to").value;
  const amount = document.getElementById("amount").value;

  await fetch("/send", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ from: userId, to, amount })
  });

  alert("Money sent!");
}
