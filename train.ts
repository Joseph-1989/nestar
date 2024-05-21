// ZO-TASK:

// Shunday function yozing, u parametrdagi string ichidagi qavslar miqdori balansda
// ekanligini aniqlasin. Ya'ni ochish("(") va yopish(")") qavslar soni bir xil bolishi kerak.
// MASALAN: areParenthesesBalanced("string()ichida(qavslar)soni()balansda") return true

function areParenthesesBalanced(inputString: string): boolean {
	let openingParenthesesCount = 0;

	for (const char of inputString) {
		// If the character is an opening parenthesis, increment the counter
		if (char === '(') {
			openingParenthesesCount++;
		}
		// If the character is a closing parenthesis, decrement the counter
		else if (char === ')') {
			openingParenthesesCount--;

			// If the counter goes below zero, return false, as this indicates an unmatched closing parenthesis
			if (openingParenthesesCount < 0) {
				return false;
			}
		}
	}

	// After iterating through the entire string, if the counter is zero, then the parentheses are balanced
	if (openingParenthesesCount === 0) {
		return true;
	}
	// Otherwise, they are not balanced
	else {
		return false;
	}
}

console.log(areParenthesesBalanced('string()ichida(qavslar)soni()balansda (())'));
