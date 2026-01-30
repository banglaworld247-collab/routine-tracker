const API = "https://script.google.com/macros/s/AKfycbzi-S0b5FHHj8ogd6XrOk11aziHK9HW_5f0gQ7z1Oc84pGYm5eSDoxSSMltAr7KYqLO/exec";

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

