document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInputString = document.getElementById('withdraw-input');
    const withdrawInput = withdrawInputString.value;
    const withdrawValue = parseFloat(withdrawInput);
    withdrawInputString.value = '';
    if (isNaN(withdrawValue)) {
        alert('Provide a Valid Number')
        return;
    }

    const withdrawFieldString = document.getElementById('old-withdraw');
    const withdrawField = withdrawFieldString.innerText;
    const newWithdraw = parseFloat(withdrawField);
    withdrawFieldString.innerText = withdrawInput;


    const balanceTotal = document.getElementById('balance');
    const totalBalanceString = balanceTotal.innerText;
    const totalBalance = parseFloat(totalBalanceString);

    if (withdrawInput > totalBalance) {
        alert('Insufficient Balance');
        return;
    }

    const CurrentWithdrawValue = newWithdraw + withdrawValue;
    withdrawFieldString.innerText = CurrentWithdrawValue;

    const newBalance = totalBalance - CurrentWithdrawValue;
    balanceTotal.innerText = newBalance;


})