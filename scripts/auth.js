document.getElementById('login-tab').addEventListener('click',()=> {
    document.getElementById('Login-Form').style.display='block';
    document.getElementById('Register-Form').style.display = 'none';
})
document.getElementById('register-tab').addEventListener('click', () => {
    document.getElementById('Register-Form').style.display = 'block';
    document.getElementById('Login-Form').style.display = 'none';
  });