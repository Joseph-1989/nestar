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
