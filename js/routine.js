const API = "https://script.google.com/macros/s/AKfycbyVHxvUmawhSX8xcnA6LOIGDzxKSN1l14vzJo9XLmLPUUf2DIBvdyTX6j0rHu1rzspU/exec";
const userId = localStorage.getItem("userId");

if (!userId) location.href = "login.html";

const list = document.getElementById("taskList");

/* Load existing routine */
fetch(API + "?action=getRoutine&userId=" + userId)
  .then(r => r.json())
  .then(d => {
    d.tasks.forEach(t => createTask(t));
  });

function createTask(value = "") {
  const div = document.createElement("div");
  div.className = "task";

  div.innerHTML = `
    <input value="${value}">
    <button onclick="this.parentElement.remove()">✕</button>
  `;
  list.appendChild(div);
}

function addTask() {
  createTask();
}

function saveRoutine() {
  const tasks = [...document.querySelectorAll(".task input")]
    .map(i => i.value.trim())
    .filter(Boolean);

  fetch(API, {
    method: "POST",
    body: JSON.stringify({
      action: "saveRoutine",
      userId,
      tasks
    })
  }).then(() => alert("Routine saved ✅"));
}
