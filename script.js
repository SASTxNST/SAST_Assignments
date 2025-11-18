window.onload = () => {
    document.querySelector('#startBtn').onclick = start;
    document.querySelector('#resetBtn').onclick = reset;
}

function start () {
    const date = document.querySelector('#launchDate').value;
    const time = document.querySelector('#launchTime').value;

    const stop = document.querySelector('#stopBtn');

    const endTime = new Date(date + " " + time);


    const interval = setInterval(() => calculateTime(endTime), 1000);

    stop.addEventListener('click', () => {
        clearInterval(interval);
    })
}

function calculateTime (endTime) {
    const currentTime = new Date();

    const days = document.querySelector('#days');
    const hours = document.querySelector('#hours');
    const minutes = document.querySelector('#mins');
    const seconds = document.querySelector('#secs');
    const launched = document.getElementById('launched')

    if (endTime > currentTime) {
        const timeLeft = (endTime - currentTime);

        days.innerText = Math.floor(timeLeft / 1000 / 60 / 60 / 24);
        hours.innerText = Math.floor(timeLeft / 1000 / 60 / 60 ) % 24;
        minutes.innerText = Math.floor(timeLeft / 1000 / 60 ) % 60;
        seconds.innerText = Math.floor(timeLeft / 1000 ) % 60;
    } else {
        days.innerText = 0;
        hours.innerText = 0;
        minutes.innerText = 0;
        seconds.innerText = 0;
        launched.style.display = "block";
    }
}

function reset() {
    document.querySelector('#days').innerText = 0;
    document.querySelector('#hours').innerText = 0;
    document.querySelector('#minutes').innerText = 0;
    document.querySelector('#seconds').innerText = 0;

}
