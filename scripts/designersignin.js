document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signinForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // toggle password visibility (reuse pattern from signup)
    document.querySelectorAll('.toggle-password').forEach(el => {
        el.addEventListener('click', () => {
            const target = document.getElementById(el.dataset.target);
            if (target) {
                target.type = target.type === 'password' ? 'text' : 'password';
                el.textContent = target.type === 'password' ? '👁️' : '🙈';
            }
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = emailInput.value.trim();
        const password = passwordInput.value;

        if (!email || !password) {
            alert('Please enter both email and password.');
            return;
        }

        // check against stored profile
        const stored = JSON.parse(localStorage.getItem('designerProfile') || '{}');
        if (stored.email && stored.email.toLowerCase() === email.toLowerCase()) {
            // in a real app we'd validate password too; here we just allow sign-in
            localStorage.setItem('designerLoggedIn', 'true');
            window.location.href = 'designerdashboard.html';
        } else {
            alert('No account found with that email. Please sign up first.');
        }
    });
});