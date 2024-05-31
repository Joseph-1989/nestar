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

// ZN-TASK:

// Shunday function yozing, uni array va number parametri bolsin.
// Ikkinchi parametrda berilgan raqamli indexgacha arrayni orqasiga ogirib qaytarsin.
// MASALAN: rotateArray([1, 2, 3, 4, 5, 6], 3) return [5, 6, 1, 2, 3, 4]

function rotateArray(arr: any[], index: number): any[] {
	if (!Array.isArray(arr) || typeof index !== 'number') {
		throw new Error('Invalid arguments: array and number expected');
	}
	const length = arr.length;
	const newIndex = ((index % length) + length) % length;
	return arr.slice(newIndex).concat(arr.slice(0, newIndex));
}

const arr = [1, 2, 3, 4, 5, 6];
const index = 3;
const rotatedArr = rotateArray(arr, index);
console.log(rotatedArr); // [5, 6, 1, 2, 3, 4]

// ZO-TASK:

// Shunday function yozing, u parametrdagi string ichidagi qavslar miqdori balansda
// ekanligini aniqlasin. Ya'ni ochish("(") va yopish(")") qavslar soni bir xil bolishi kerak.
// MASALAN: areParenthesesBalanced("string()ichida(qavslar)soni()balansda") return true

function areParenthesesBalanced(inputString: string): boolean {
	let openingParenthesesCount = 0;

	for (const char of inputString) {
		// If the character is an opening parenthesis, increment the counter
		if (char === '(') {
			openingParenthesesCount++;
		}
		// If the character is a closing parenthesis, decrement the counter
		else if (char === ')') {
			openingParenthesesCount--;

			// If the counter goes below zero, return false, as this indicates an unmatched closing parenthesis
			if (openingParenthesesCount < 0) {
				return false;
			}
		}
	}

	// After iterating through the entire string, if the counter is zero, then the parentheses are balanced
	if (openingParenthesesCount === 0) {
		return true;
	}
	// Otherwise, they are not balanced
	else {
		return false;
	}
}

console.log(areParenthesesBalanced('string()ichida(qavslar)soni()balansda (())'));

// ZP-TASK:

// Shunday function yozing, u parametridagi array ichida
// eng kop takrorlangan raqamni topib qaytarsin.
// MASALAN: majorityElement([1,2,3,4,5,4,3,4]) return 4

function majorityElement(arr: number[]): number | undefined {
	if (arr.length === 0) return undefined;

	const elementCounts = new Map<number, number>();

	for (const num of arr) {
		const currentCount = elementCounts.get(num) || 0;
		elementCounts.set(num, currentCount + 1);
	}

	const maxCount = Math.max(...elementCounts.values());

	for (const [num, count] of elementCounts.entries()) {
		if (count === maxCount) return num;
	}

	return undefined;
}

console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4, 8, 8, 8, 8, 999999])); // Output: 4

// ZQ-TASK:

// Shunday function yozing, u parametridagi array ichida
// 2 marta qaytarilgan sonlarni alohida araryda qaytarsin.
// MASALAN: findDuplicates([1,2,3,4,5,4,3,4]) return [3, 4]
function findDuplicates(arr: number[]): number[] {
	const countMap: { [key: number]: number } = {};
	const duplicates: number[] = [];

	for (const num of arr) {
		if (countMap[num]) {
			countMap[num]++;
		} else {
			countMap[num] = 1;
		}
	}

	for (const key in countMap) {
		if (countMap[key] > 1) {
			duplicates.push(Number(key));
		}
	}

	return duplicates;
}

console.log(findDuplicates([1, 2, 3, 10, 4, 5, 5, 5, 5, 4, 3, 4, 8, 8, 8, 8, 10, 999999]));

// ZR-TASK:

// Shunday function yozing, u parametridagi string ichidagi raqam va sonlarni sonini sanasin.
// MASALAN: countNumberAndLetters(“string152%\¥”) return {number:3, letter:6}
function countNumberAndLetters(str) {
	let number = 0;
	let letter = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i] >= '0' && str[i] <= '9') {
			number++;
		} else if ((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z')) {
			letter++;
		}
	}
	return { number, letter };
}
console.log(countNumberAndLetters('string152%¥'));
console.log(countNumberAndLetters('JOSEPH770077%¥'));

// ZS-TASK:

// Shunday function yozing, u parametridagi arrayni
// ichidagi 1 marta kelgan elemnetni qaytarsin.
// MASALAN: singleNumber([4, 2, 1, 2, 1]) return 4
function singleNumber(nums) {
	const map = new Map();

	// Count each element in the array
	for (const num of nums) {
		if (map.has(num)) {
			map.set(num, map.get(num) + 1);
		} else {
			map.set(num, 1);
		}
	}

	// Collect all elements that appear only once
	const singleElements = [];
	for (const [key, value] of map.entries()) {
		if (value === 1) {
			singleElements.push(key);
		}
	}

	// Return the array of single elements
	return singleElements;
}

// Example usage
console.log(singleNumber([4, 2, 1, 2, 1, 8, 9, 'a', 'k'])); // Should output: [4, 8, 9, 'a', 'k']
