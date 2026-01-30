const API = "https://script.google.com/macros/s/AKfycbwwRO1RdyAPdHO8oVp1g_iCT0CSt_a9Zl6XWj7ZAg5B3Q3W8alqTus8o9D_jWAfxulu/exec";

function register() {
  fetch(API, {
    method: "POST",
    body: JSON.stringify({
      action: "register",
      name: name.value,
      email: email.value,
      password: password.value
    })
  })
  .then(r => r.json())
  .then(res => {
    if (res.success) location.href = "login.html";
    else alert(res.message);
  })
  .catch(() => alert("API error"));
}




