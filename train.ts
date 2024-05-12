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
