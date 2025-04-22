let currentUser = "";

function login() {
    const username = document.getElementById("username").value.trim();
    if (username === "") {
        alert("Zəhmət olmasa istifadəçi adınızı daxil edin!");
        return;
    }

    currentUser = username;
    localStorage.setItem("pubg_user", username);

    let balance = localStorage.getItem(`balance_${username}`);
    if (balance === null) {
        localStorage.setItem(`balance_${username}`, "0");
        balance = "0";
    }

    document.getElementById("user-name").innerText = username;
    document.getElementById("balance").innerText = balance;
    document.querySelector(".login-box").classList.add("hidden");
    document.getElementById("user-panel").classList.remove("hidden");
}

function addUC() {
    if (currentUser === "") return;
    let balance = parseInt(localStorage.getItem(`balance_${currentUser}`));
    balance += 100;
    localStorage.setItem(`balance_${currentUser}`, balance);
    document.getElementById("balance").innerText = balance;
}

// Sayt açıldıqda əvvəlki istifadəçini göstər
window.onload = () => {
    const savedUser = localStorage.getItem("pubg_user");
    if (savedUser) {
        document.getElementById("username").value = savedUser;
        login();
    }
};
