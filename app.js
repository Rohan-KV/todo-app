document.getElementById('signup-link').addEventListener('click', function () {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('signup-container').style.display = 'block';
});

document.getElementById('login-link').addEventListener('click', function () {
    document.getElementById('signup-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
});

document.getElementById('signup-btn').addEventListener('click', function () {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    if (username && password) {
        localStorage.setItem(username, password);
        alert('Account created successfully! Please log in.');
        document.getElementById('signup-container').style.display = 'none';
        document.getElementById('login-container').style.display = 'block';
    } else {
        alert('Please fill in both fields.');
    }
});

document.getElementById('login-btn').addEventListener('click', function () {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const storedPassword = localStorage.getItem(username);

    if (storedPassword && storedPassword === password) {
        sessionStorage.setItem('loggedInUser', username);
        window.location.href = 'todo.html';
    } else {
        alert('Invalid login credentials.');
    }
});
