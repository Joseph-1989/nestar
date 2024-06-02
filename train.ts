// ZU-TASK:

// Shunday function yozing, u parametridagi
//  array ichida takrorlanmagan raqamlar yig'indisini qaytarsin.
// MASALAN: sumOfUnique([1,2,3,2]) return 4
function sumOfUnique(arr) {
	const map = new Map();
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (map.has(arr[i])) {
			map.set(arr[i], map.get(arr[i]) + 1);
		} else {
			map.set(arr[i], 1);
		}
	}
	for (let i = 0; i < arr.length; i++) {
		if (map.get(arr[i]) === 1) {
			sum += arr[i];
		}
	}
	return sum;
}
// Example usage
console.log(sumOfUnique([1, 2, 3, 2])); // Should output: 4
console.log(sumOfUnique([1, 2, 3, 4])); // Should output: 10
console.log(sumOfUnique([1, 1, 1, 1])); // Should output: 0
