const API = "https://script.google.com/macros/s/AKfycbw8SWnQ12llcwwGHNynHrMrrfV_ZpsT9vsOdlihD0X_zEOBScNmFf4ta6goMgVnbB9s/exec";

function register() {
  const nameField = document.getElementById("name");
  const emailField = document.getElementById("email");
  const passField = document.getElementById("password");

  // Construct the URL with parameters
  const params = new URLSearchParams({
    action: "register",
    name: nameField.value,
    email: emailField.value,
    password: passField.value
  });

  fetch(`${API}?${params.toString()}`)
    .then(r => r.json())
    .then(res => {
      if (res.success) {
        location.href = "login.html";
      } else {
        alert(res.message || "Registration failed");
      }
    })
    .catch(err => {
      console.error(err);
      alert("API error - check console");
    });
}





