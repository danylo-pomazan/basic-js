const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  // Convert the number to a string to extract its digits
  let num = n.toString();

  // Loop until we get a one-digit number
  while (num.length > 1) {
    // Split the string into an array of digits
    const digits = num.split("");

    // Calculate the sum of digits
    const sum = digits.reduce((acc, digit) => acc + parseInt(digit), 0);

    // Update the num variable with the sum
    num = sum.toString();
  }

  // Return the final one-digit sum
  return parseInt(num);
}

module.exports = {
  getSumOfDigits,
};
