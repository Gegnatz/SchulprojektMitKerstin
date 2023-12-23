function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'testuser' && password === 'test123') {
        window.location.href = 'Homepage.html';
    } else {
        alert('Ungültige Anmeldeinformationen. Bitte versuche es erneut.');
    }
}
