document.getElementById('login-btn').addEventListener('click', function () {
    const emailInput = document.getElementById('email-input');
    const emailValue = emailInput.value;
    const passwordInput = document.getElementById('password-input');
    const passwordValue = passwordInput.value;
    if (emailValue === 'shahriar@gmail.com' && passwordValue === 'shahriar') {
        window.location.href = 'account.html'
    }
    else {
        alert('Invalid User')
    }
})