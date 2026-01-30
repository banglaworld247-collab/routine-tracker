const API = "https://script.google.com/macros/s/AKfycbw8SWnQ12llcwwGHNynHrMrrfV_ZpsT9vsOdlihD0X_zEOBScNmFf4ta6goMgVnbB9s/exec";

function register() {
  // Select the elements properly
  const nameVal = document.getElementById("name").value;
  const emailVal = document.getElementById("email").value;
  const passVal = document.getElementById("password").value;

  // Build the URL with parameters
  const params = new URLSearchParams({
    action: "register",
    name: nameVal,
    email: emailVal,
    password: passVal
  });

  // Use GET instead of POST
  fetch(`${API}?${params.toString()}`)
  .then(r => r.json())
  .then(res => {
    if (res.success) {
      alert("Registration Successful!");
      location.href = "login.html";
    } else {
      alert(res.message);
    }
  })
  .catch(err => {
    console.error("Fetch error:", err);
    alert("API error - check console");
  });
}
