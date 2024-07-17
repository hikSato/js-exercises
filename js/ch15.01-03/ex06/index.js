document.getElementById("date").textContent = new Date().toISOString();
document.getElementById("agent").textContent = navigator.userAgent;
document.getElementById("status").textContent = navigator.onLine
  ? "オンライン"
  : "オフライン";
document.getElementById("language").textContent = navigator.language;
// document.getElementById("resolution").textContent = navigator.add;
// document.getElementById("pixel").textContent = navigator.add;
// document.getElementById("cookie").textContent = navigator.add;
// document.getElementById("jsEnabled").textContent = navigator.add;
document.getElementById("url").textContent = window.location.href;
