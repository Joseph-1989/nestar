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
console.log(countNumberAndLetters('string152%¥'));
