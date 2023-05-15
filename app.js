const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the form from submitting

    const enrollment = document.getElementById('enrollment').value;
    const password = document.getElementById('password').value;

    // Make an HTTP request to the API
    fetch(`https://juit-webkiosk-api.onrender.com/v1.0/login?enrollment=${enrollment}&password=${password}`)
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // If the API response is successful, log the user in
                window.location.replace("D:/WebTech Project/JUIT-Gallery/home.html")
                // alert('Login successful!');
            } else {
                // If the API response is unsuccessful, show an error message
                alert('Invalid enrollment number or password');
            }
        })
        .catch(error => {
            // If there is an error with the API request, show an error message
            alert('An error occurred while logging in');
            console.error(error);
        });
});
