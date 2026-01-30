const API = "https://script.google.com/macros/s/AKfycbyVHxvUmawhSX8xcnA6LOIGDzxKSN1l14vzJo9XLmLPUUf2DIBvdyTX6j0rHu1rzspU/exec";
const userId = localStorage.getItem("userId");

if (!userId) location.href = "login.html";

date.innerText = new Date().toDateString();

/* ROUTINE */
fetch(API + "?action=getRoutine&userId=" + userId)
  .then(r => r.json())
  .then(d => {
    d.tasks.forEach(t => {
      tasks.innerHTML += `
        <div class="task">
          <input type="checkbox"> ${t}
        </div>
      `;
    });
  });

/* ANALYTICS */
fetch(API + "?action=getStats&userId=" + userId)
  .then(r => r.json())
  .then(stats => {
    streak.innerText = "🔥 " + stats.streak;
    avg.innerText = stats.avg + "%";

    new Chart(chart, {
      type: "line",
      data: {
        labels: stats.labels,
        datasets: [{
          data: stats.data,
          tension: .4
        }]
      },
      options: {
        plugins: { legend: { display: false } },
        scales: { y: { min: 0, max: 100 } }
      }
    });
  });

function submitDay() {
  const checks = document.querySelectorAll("input[type=checkbox]");
  let done = [...checks].filter(c => c.checked).length;

  fetch(API, {
    method: "POST",
    body: JSON.stringify({
      action: "submit",
      userId,
      date: new Date().toDateString(),
      completed: done,
      total: checks.length
    })
  }).then(() => location.reload());
}
