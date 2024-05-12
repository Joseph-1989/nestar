// ZJ-TASK:

// Shunday function yozing, u berilgan arrayni ichidagi
// numberlarni qiymatini hisoblab qaytarsin.
// MASALAN: reduceNestedArray([1, [1, 2, [4]]]) return 8

function reduceNestedArray(arr) {
	return arr.reduce((acc, current) => {
		if (Array.isArray(current)) {
			return acc + reduceNestedArray(current);
		} else {
			return acc + current;
		}
	}, 0);
}

console.log(reduceNestedArray([1, [1, 2, [4]]])); // Output: 8

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
