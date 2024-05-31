// ZT-TASK:

// Shunday function yozing, u parametridagi string
// ichida 1 martadan ortiq qaytarilmagan birinchi harf indeksini qaytarsin.
// MASALAN: firstUniqueCharIndex(“stamp”) return 0
function firstUniqueCharIndex(str) {
	const map = new Map();
	for (let i = 0; i < str.length; i++) {
		if (map.has(str[i])) {
			map.set(str[i], map.get(str[i]) + 1);
		} else {
			map.set(str[i], 1);
		}
	}
	for (let i = 0; i < str.length; i++) {
		if (map.get(str[i]) === 1) {
			return i;
		}
	}
	return -1;
}
// Example usage
console.log(firstUniqueCharIndex('stamp')); // Should output: 0
console.log(firstUniqueCharIndex('stamps')); // Should output: -1
console.log(firstUniqueCharIndex('')); // Should output: -1
