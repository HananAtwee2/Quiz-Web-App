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
    if (email === 'admin@quiz.com' && password === 'admin123') {
        window.location.href = 'dashboard.html'; // Redirect to admin dashboard
    } else {
        window.location.href = 'home.html'; // Redirect to home page for users
        }
}
document.getElementById('login-btn').addEventListener('click', login);
document.getElementById('register-btn').addEventListener('click', register);
