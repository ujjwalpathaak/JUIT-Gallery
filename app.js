const loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", async (event) => {
  event.preventDefault();

  const enrollment = document.getElementById("enrollment").value;
  const password = document.getElementById("password").value;

  const url = "https://juit-webkiosk-api.onrender.com/v1.0/login";
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: enrollment,
      password: password,
    }),
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    if (result.success === true) {
      window.location.replace("http://127.0.0.1:5500/home.html");
    } else {
    }
  } catch (error) {
    alert("Invalid Password or Enrollment Number");
  }
});
