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
