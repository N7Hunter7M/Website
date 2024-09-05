function switchForm(form) {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const forgotPasswordForm = document.getElementById('forgot-password-form');

    loginForm.classList.remove('active');
    signupForm.classList.remove('active');
    forgotPasswordForm.classList.remove('active');

    if (form === 'login') {
        loginForm.classList.add('active');
    } else if (form === 'signup') {
        signupForm.classList.add('active');
    } else if (form === 'forgot-password') {
        forgotPasswordForm.classList.add('active');
    }
}