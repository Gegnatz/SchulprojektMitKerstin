function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Hier sollte die eigentliche Validierung der Anmeldedaten stattfinden.
    // Zum Beispiel können diese Daten mit gespeicherten Benutzerdaten verglichen werden.

    // Hier ist ein einfaches Beispiel:
    if (username === 'testuser' && password === 'test123') {
        // Erfolgreiche Anmeldung - Weiterleitung zur nächsten Seite
        window.location.href = 'weitereSeite.html';
    } else {
        alert('Ungültige Anmeldeinformationen. Bitte versuche es erneut.');
    }
}
