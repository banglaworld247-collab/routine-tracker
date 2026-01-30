const API = "https://script.google.com/macros/s/AKfycbwDX2OJx6aWWd_kSWYMStaIENLPbFb-O1S-i0hTPpX98UL9JkT7MJuSMIOYMnUHNjLW/exec";

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



