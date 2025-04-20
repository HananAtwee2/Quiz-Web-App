document.getElementById('login-tab').addEventListener('click',()=> {
    document.getElementById('Login-Form').style.display='block';
    document.getElementById('Register-Form').style.display = 'none';
})
document.getElementById('register-tab').addEventListener('click', () => {
    document.getElementById('Register-Form').style.display = 'block';
    document.getElementById('Login-Form').style.display = 'none';
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