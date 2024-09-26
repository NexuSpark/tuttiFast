function startGame() {
    const letterElement = document.getElementById("letter");
    const btnSubmit = document.getElementById("submit");
    const counterElement = document.getElementById("counter");

    const randomLetter = getRandomLetter();

    letterElement.innerHTML = randomLetter;

    let counter = 30;

    const interval = setInterval(() => {
        counterElement.innerHTML = counter;
        counter--;

        if (counter < 0) {
            clearInterval(interval);
            counterElement.innerHTML = "PERDISTE...";
            counterElement.style.color = "var(--rojo)";
            btnSubmit.disabled = true;
            playAudio(false);
        }
    }, 1000);

    gameForm.addEventListener("submit", (event) => {
        event.preventDefault();
        clearInterval(interval);
        const name = document.getElementById("name").value;
        const color = document.getElementById("color").value;
        const food = document.getElementById("food").value;
        const animal = document.getElementById("animal").value;
        const city = document.getElementById("city").value;
        if (
            name[0].toUpperCase() === randomLetter &&
            color[0].toUpperCase() === randomLetter &&
            food[0].toUpperCase() === randomLetter &&
            animal[0].toUpperCase() === randomLetter &&
            city[0].toUpperCase() === randomLetter
        ) {
            counterElement.innerHTML = "¡GANASTE!";
            counterElement.style.color = "var(--verde)";
            playAudio(true);
        } else {
            counterElement.innerHTML = "TE EQUIVOCASTE Y PERDISTE";
            counterElement.style.color = "var(--rojo)";
            playAudio(false);
        }
        btnSubmit.disabled = true;
    });
}

function getRandomLetter() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return letters[Math.floor(Math.random() * letters.length)];
}

function playAudio(win) {
    const audioElement = document.getElementById("audio");
    if (win) {
        audioElement.setAttribute("src", "audios/win.mp3");
    } else {
        audioElement.setAttribute("src", "audios/gameover.mp3");
    }
    audioElement.play();
}