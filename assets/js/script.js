function updateClock() {
  const clockEl = document.getElementById("clockText");
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  clockEl.textContent = `${hours}:${minutes}`;
}

window.addEventListener("load", () => {
  const clockEl = document.getElementById("clockText");
  clockEl.textContent = "· · ·";

  setTimeout(() => {
    updateClock();
    setInterval(updateClock, 1000);
  }, 500);

  setTimeout(updateStatus, 500);
});

function updateStatus() {
  const textEl = document.getElementById("statusText");
  const phonEl = document.querySelector(".phon");

  if (navigator.onLine) {
    textEl.textContent = "З'єднання присутнє";
    phonEl.style.background = "var(--ess)";
  } else {
    textEl.textContent = "З'єднання перервано";
    phonEl.style.background = "var(--dnt)";
  }
}

window.addEventListener("online", updateStatus);
window.addEventListener("offline", updateStatus);

document.querySelector(".phon").addEventListener("click", () => {
  const docEl = document.documentElement;

  if (!document.fullscreenElement) {
    docEl.requestFullscreen().catch(() => {});
  } else {
    document.exitFullscreen();
  }
});
