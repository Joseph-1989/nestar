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
