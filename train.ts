// ZK-TASK:

// Shunday function yozing, u har soniyada bir marta consolega 1 dan
// 5 gacha bolgan raqamlarni chop etsin va 5 soniyadan keyin ishini toxtatsin.
// MASALAN: printNumbers()

function printNumbers(): void {
	let counter = 0;
	const intervalId = setInterval(() => {
		const randomNumber = Math.floor(Math.random() * 5) + 1;
		console.log(randomNumber);
		counter++;
		if (counter >= 5) {
			clearInterval(intervalId);
		}
	}, 1000);
}

printNumbers();
