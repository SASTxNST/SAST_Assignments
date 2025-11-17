let launchTime = new Date("2025-12-31T23:59:59").getTime();
if (localStorage.getItem("customLaunch")) {
  launchTime = parseInt(localStorage.getItem("customLaunch"));
}
const timer = setInterval(updateCountdown, 1000);
function updateCountdown() {
  const now = new Date().getTime();
  const diff = launchTime - now;
  if (diff <= 0) {
    document.getElementById("status").innerText = "LAUNCHED 🚀";
    document.getElementById("status").style.color = "#00ffea";
    document.getElementById("status").style.textShadow =
      "0 0 20px #00faff, 0 0 40px #00faff, 0 0 60px #00faff";
    document.getElementById("countdown").style.display = "none";
    clearInterval(timer);
    return;
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}
document.getElementById("setLaunchBtn").addEventListener("click", () => {
  const inputVal = document.getElementById("launchInput").value;
  if (!inputVal) {
    alert("Please select a valid date & time!");
    return;
  }
  launchTime = new Date(inputVal).getTime();
  localStorage.setItem("customLaunch", launchTime);
});
