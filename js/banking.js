document.getElementById("deposit-btn").addEventListener("click", function () {
  const deposit = document.getElementById("deposit");
  const newDepositAmountText = deposit.value;
  const newDepositAmount = parseFloat(newDepositAmountText);
  //   Add amount to deposit
  const previousDeposit = document.getElementById("deposit-total");
  const previousDepositText = previousDeposit.innerText;
  const previousDepositTotal = parseFloat(previousDepositText);

  const newDepositTotal = newDepositAmount + previousDepositTotal;

  previousDeposit.innerText = newDepositTotal;

  //   update balance
  const balance = document.getElementById("balance-total");
  const balanceValueText = balance.innerText;
  const balanceValue = parseFloat(balanceValueText);
  const newBalance = balanceValue + newDepositTotal;
  balance.innerText = newBalance;

  //   clear input field
  deposit.value = "";
});
