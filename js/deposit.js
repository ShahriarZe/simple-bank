document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const depositValueString = depositInput.value;
    const depositAmoutNew = parseFloat(depositValueString);
    depositInput.value = '';
    if (isNaN(depositAmoutNew)) {
        alert('Provide a Valid Number')
        return;
    }

    const depositAmount = document.getElementById('deposit-amount');
    const depositValueOld = depositAmount.innerText;
    const OlddepositValue = parseFloat(depositValueOld);
    depositAmount.innerText = depositValueString;


    const newDepositValue = OlddepositValue + depositAmoutNew;
    depositAmount.innerText = newDepositValue;


    const balanceTotal = document.getElementById('balance');
    const totalBalanceString = balanceTotal.innerText;
    const totalBalance = parseFloat(totalBalanceString);

    const newBalance = totalBalance + newDepositValue;
    balanceTotal.innerText = newBalance;

})