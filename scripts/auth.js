document.getElementById('show-register').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('Login-Form').style.display = 'none';
    document.getElementById('Register-Form').style.display = 'block';
});

document.getElementById('show-login').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('Register-Form').style.display = 'none';
    document.getElementById('Login-Form').style.display = 'block';
});

console.log("auth.js is working");


// Register function
function register() {
    const email = document.getElementById('register-email').value;
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if user already exists
    const exists = users.some(user => user.email === email);
    if (exists) {
        alert('User already exists!');
        return;
    }
    users.push({ email, username, password, scores: [] });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful!');
    // After registration, go back to login page
    document.getElementById('Register-Form').style.display = 'none';
    document.getElementById('Login-Form').style.display = 'block';
}

// Login function
function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
        alert('Invalid credentials!');
        return;
    }
    localStorage.setItem('currentUser', JSON.stringify(user));

    // Redirect to home page or dashboard
    window.location.href = 'home.html';  // Or 'dashboard.html' for admins
}

// Add event listeners for the buttons
document.getElementById('login-btn').addEventListener('click', login);
document.getElementById('register-btn').addEventListener('click', register);

