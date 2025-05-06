function showLogin() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('signupForm').style.display = 'none';
}

function showSignup() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
}

// Submit Login Form
function submitLogin(event) {
    event.preventDefault();

    const name = document.getElementById('loginName').value;
    const email = document.getElementById('loginEmail').value;

    const data = {
        name: name,
        email: email
    };

    // 🔵 PUT YOUR LOGIN API URL BELOW
    fetch('https://your-server-url.com/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        alert('Login Successful');
        console.log('Success:', data);
        // Redirect or show success message here
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Login Failed');
    });
}

// Submit Signup Form
function submitSignup(event) {
    event.preventDefault();

    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    const data = {
        name: name,
        email: email,
        password: password
    };

    // 🔵 PUT YOUR SIGNUP API URL BELOW
    fetch('https://your-server-url.com/api/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        alert('Signup Successful');
        console.log('Success:', data);
        // Redirect or show success message here
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Signup Failed');
    });
}