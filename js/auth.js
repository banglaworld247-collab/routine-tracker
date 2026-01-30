const API = "https://script.google.com/macros/s/AKfycbz_zV1J2Q26_cSOpGYol8Xs78gNlqReAoOm8QOjSy4VcL5LvU6KVptV0ezDO5T0Smw3/exec";

function register() {
  const params = new URLSearchParams({
    action: "register",
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    password: document.getElementById('password').value
  });

  fetch(`${API}?${params.toString()}`)
    .then(r => r.json())
    .then(res => {
      if (res.success) location.href = "login.html";
      else alert(res.message);
    });
}





