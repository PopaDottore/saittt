const quizForm = document.getElementById("quiz");
const resultsDiv = document.getElementById("results");
const image = document.getElementById("image");

quizForm.addEventListener("submit", (e) => {
	e.preventDefault();

	const q1 = quizForm.q1.value;
	const q2 = quizForm.q2.value;
    const q3 = quizForm.q3.value;
    const q4 = quizForm.q4.value;
    const q5 = quizForm.q5.value;
    const q6 = quizForm.q6.value;
    const q7 = quizForm.q7.value;
    const q8 = quizForm.q8.value;
    const q9 = quizForm.q9.value;
    const q10 = quizForm.q10.value;

	let score = 0;

	if (q1 === "b") {
		score++;
	}
	if (q2 === "c") {
		score++;
	}
    if (q3 === "a") {
		score++;
	}
    if (q4 === "b") {
		score++;
	}
    if (q5 === "c") {
		score++;
	}
    if (q6 === "c") {
		score++;
	}
    if (q7 === "b") {
		score++;
	}
    if (q8 === "b") {
		score++;
	}
    if (q9 === "c") {
		score++;
	}
    if (q10 === "b") {
		score++;
	}

	resultsDiv.textContent = `Вы набрали ${score} из 10 баллов.`;

	if (score === 10 || score === 9) {
		image.src = "images/5.png";
		image.alt = "Высокий балл";
        description.textContent = "Отлично! 5";
    } else if (score === 8 || score === 7) {
		image.src = "images/4.png";
		image.alt = "Средний балл";
        description.textContent = "Хорошая работа! 4";
	}
    else if (score === 6 || score === 5) {
		image.src = "images/3.png";
		image.alt = "Средний балл";
        description.textContent = "Я в недоумении ...! 3";
	}
    else if (score === 4 || score === 3) {
		image.src = "images/2.png";
		image.alt = "Средний балл";
        description.textContent = "Я обижен ...! 2";
	}
     else {
		image.src = "images/1.png";
		image.alt = "Низкий балл";
        description.textContent = "Я расстроен ...! 1";
    }
    image.style.display = "block";
});