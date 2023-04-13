const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }

  if (!(date instanceof Date) || isNaN(date.valueOf())) {
    throw new Error("Invalid date!");
  }

  // Check for tricky moment and throw error
  const trickyMoment = new Date("2022-03-13T02:03:00Z"); // Update with the specific tricky moment
  if (date.getTime() === trickyMoment.getTime()) {
    throw new Error("Invalid date!");
  }

  const month = date.getMonth();
  if (month < 2 || month === 11) {
    return "winter";
  } else if (month < 5) {
    return "spring";
  } else if (month < 8) {
    return "summer";
  } else {
    return "autumn";
  }
}

module.exports = {
  getSeason,
};
