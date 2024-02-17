document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const cpassword = document.getElementById('confirm-password');
    const submit = document.getElementById('btn');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        validateInputs();
    });

    function validateInputs() {
        const usernameValue = username.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        const cPasswordValue = cpassword.value.trim();

        if (usernameValue === '') {
            setError(username, 'Username is required');
        } else {
            setSuccess(username);
        }

        if (emailValue === '') {
            setError(email, 'Email is required');
        } else if (!isValidEmail(emailValue)) {
            setError(email, 'Provide a valid Email Address');
        } else {
            setSuccess(email);
        }

        if (passwordValue === '') {
            setError(password, 'Password is required');
        } else if (passwordValue.length < 8) {
            setError(password, 'Password must be at least 8 characters.');
        } else {
            setSuccess(password);
        }

        if (cPasswordValue === '') {
            setError(cpassword, 'Please confirm your Password');
        } else if (cPasswordValue !== passwordValue) {
            setError(cpassword, 'Password doesn\'t match');
        } else {
            setSuccess(cpassword);
        }
    }

    function setError(element, message) {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');
        errorDisplay.innerText = message;
        inputControl.classList.add('error');
        inputControl.classList.remove('success');
    }

    function setSuccess(element) {
        const inputControl = element.parentElement;
        inputControl.querySelector('.error').innerText = '';
        inputControl.classList.add('success');
        inputControl.classList.remove('error');
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
