// ⭐ STARFIELD BACKGROUND
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 150; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speed: Math.random() * 0.4
    });
}

function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(s => {
        ctx.fillStyle = "white";
        ctx.fillRect(s.x, s.y, s.size, s.size);
        s.y += s.speed;
        if (s.y > canvas.height) s.y = 0;
    });
    requestAnimationFrame(animateStars);
}

animateStars();

// ⭐ LOAD TELEMETRY DATA
fetch("telemetry.json")
    .then(res => res.json())
    .then(data => {
        const labels = data.map(d => d.time);
        const temps = data.map(d => d.temp);
        const volts = data.map(d => d.voltage);

        // Fill Table
        const tableBody = document.querySelector("#dataTable tbody");
        data.forEach(row => {
            tableBody.innerHTML += `
                <tr>
                    <td>${row.time}</td>
                    <td>${row.temp}</td>
                    <td>${row.voltage}</td>
                </tr>`;
        });

        // Temperature Chart
        new Chart(document.getElementById("tempChart"), {
            type: "line",
            data: {
                labels: labels,
                datasets: [{
                    label: "Temperature (°C)",
                    data: temps,
                    borderColor: "#00baff",
                    borderWidth: 3,
                    tension: 0.35,
                    fill: false,
                    pointRadius: 4,
                    pointBackgroundColor: "#00baff"
                }]
            },
            options: {
                responsive: true,
                plugins: { legend: { labels: { color: "#fff" } } },
                scales: {
                    x: { ticks: { color: "#fff" } },
                    y: { ticks: { color: "#fff" } }
                }
            }
        });

        // Voltage Chart
        new Chart(document.getElementById("voltChart"), {
            type: "line",
            data: {
                labels: labels,
                datasets: [{
                    label: "Voltage (V)",
                    data: volts,
                    borderColor: "#ff6f61",
                    borderWidth: 3,
                    tension: 0.35,
                    fill: false,
                    pointRadius: 4,
                    pointBackgroundColor: "#ff6f61"
                }]
            },
            options: {
                responsive: true,
                plugins: { legend: { labels: { color: "#fff" } } },
                scales: {
                    x: { ticks: { color: "#fff" } },
                    y: { ticks: { color: "#fff" } }
                }
            }
        });
    });
