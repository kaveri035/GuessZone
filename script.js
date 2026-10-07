let number = Math.floor(Math.random() * 500) + 1;

function checkGuess() {

    let input = document.getElementById("guess");

    let result = document.getElementById("result");

    let guess = Number(input.value);
    if (input.value === "") {

        result.innerHTML =
            "⚠️ Please enter a number.";

        return;
    }

    if (guess < 1 || guess > 500) {

        result.innerHTML =
            "⚠️ Enter a number between 1 and 500.";

        return;
    }

    if (guess === number) {

        result.innerHTML =
            "🎉🎊 YOU GOT IT! 🎊🎉";

        celebration();

    }

    else if (guess > number) {

        result.innerHTML =
            "🔼 Too High! Try again.";

    }

    else {

        result.innerHTML =
            "🔽 Too Low! Try again.";
    }
}


function newGame() {

    number = Math.floor(Math.random() * 500) + 1;

    document.getElementById("guess").value = "";

    document.getElementById("result").innerHTML =
        "🎯 New game! Start guessing.";
}


function celebration() {

    let symbols = [
        "🎉",
        "🎊",
        "✨",
        "⭐",
        "💜",
        "🩷",
        "🥳"
    ];

    for (let i = 0; i < 150; i++) {

        let confetti =
            document.createElement("div");


        confetti.className =
            "confetti";


        confetti.innerHTML =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.fontSize =
            (15 + Math.random() * 20) + "px";

        confetti.style.animationDuration =
            (3 + Math.random() * 3) + "s";

        confetti.style.animationDelay =
            Math.random() * 1.5 + "s";


        document.body.appendChild(confetti);

        setTimeout(function () {

            confetti.remove();

        }, 6500);
    }
}