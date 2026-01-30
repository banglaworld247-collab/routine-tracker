const API = "https://script.google.com/macros/s/AKfycbz_zV1J2Q26_cSOpGYol8Xs78gNlqReAoOm8QOjSy4VcL5LvU6KVptV0ezDO5T0Smw3/exec";

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




