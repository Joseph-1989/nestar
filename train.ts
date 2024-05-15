// ZM-TASK:

// Shunday function yozing, u function parametrga berilgan
// raqamlarni orqasiga ogirib qaytarsin.
// MASALAN: reverseInteger(123456789) return 987654321

function reverseInteger(n: number): number {
	const reversedStr = n.toString().split('').reverse().join('');
	return parseInt(reversedStr, 10);
}

console.log(reverseInteger(123456789)); // Output: 987654321
