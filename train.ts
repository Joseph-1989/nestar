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
