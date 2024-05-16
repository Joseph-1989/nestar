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

// ZL-TASK:

// Shunday function yozing, u parametrda berilgan stringni kebab casega otkazib qaytarsin.
// Bosh harflarni kichik harflarga ham otkazsin.
// MASALAN: stringToKebab(“I love Kebab”) return “i-love-kebab”
function stringToKebab(str) {
	return str
		.toLowerCase()
		.replace(/\s+/g, '-') // replace spaces with hyphens
		.replace(/[^a-z0-9-]/g, ''); // remove non-alphanumeric characters
}
console.log(stringToKebab('I love Kebab')); // "i-love-kebab"
console.log(stringToKebab('Hello World!')); // "hello-world"
console.log(stringToKebab('ThisIsATest')); // "this-is-a-test"
console.log(stringToKebab('123-abc-456')); // "123-abc-456"

// ZM-TASK:

// Shunday function yozing, u function parametrga berilgan
// raqamlarni orqasiga ogirib qaytarsin.
// MASALAN: reverseInteger(123456789) return 987654321

function reverseInteger(n: number): number {
	const reversedStr = n.toString().split('').reverse().join('');
	return parseInt(reversedStr, 10);
}

console.log(reverseInteger(123456789)); // Output: 987654321
