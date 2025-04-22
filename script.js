let balance = 20.00;

function orderUC(packageName, price) {
  if (balance >= price) {
    balance -= price;
    document.getElementById('balance').innerText = balance.toFixed(2);
    alert(`${packageName} uğurla sifariş edildi!`);
    // Burada admin panelə məlumat göndərilə bilər
  } else {
    alert("Balans kifayət etmir. Zəhmət olmasa balansı artırın.");
  }
}
