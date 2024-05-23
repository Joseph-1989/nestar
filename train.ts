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
