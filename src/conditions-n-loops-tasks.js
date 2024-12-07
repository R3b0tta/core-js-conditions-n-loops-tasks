/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  if (number >= 0) {
    return true;
  }
  return false;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > b && a > c) {
    return a;
  }
  if (b > a && b > c) {
    return b;
  }
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (
    queen.x === king.x ||
    queen.y === king.y ||
    Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)
  ) {
    return true;
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a + b < c || a + c < b || b + c < a || a === 0 || b === 0 || c === 0) {
    return false;
  }
  if (a === b || a === c || b === c) {
    return true;
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let sum = '';
  const roundedValueX = Math.floor(num / 10);
  const roundValueV = Math.floor((num % 10) / 5) === 1;
  const roundValueIX = num % 10 === 9;
  const roundValueIV = num % 5 === 4;
  const roundValueIII = num % 5 === 3;
  const roundValueII = num % 5 === 2;
  const roundValueI = num % 5 === 1;

  for (let i = 0; i < roundedValueX; i += 1) {
    sum += 'X';
  }
  if (roundValueIX) {
    sum += 'IX';
    return sum;
  }
  if (roundValueV) {
    sum += 'V';
  }
  if (roundValueIV) {
    sum += 'IV';
  }
  if (roundValueIII) {
    sum += 'III';
  }
  if (roundValueII) {
    sum += 'II';
  }
  if (roundValueI) {
    sum += 'I';
  }
  return sum;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let sum = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '-':
        sum += 'minus';
        break;
      case '1':
        sum += 'one';
        break;
      case '2':
        sum += 'two';
        break;
      case '3':
        sum += 'three';
        break;
      case '4':
        sum += 'four';
        break;
      case '5':
        sum += 'five';
        break;
      case '6':
        sum += 'six';
        break;
      case '7':
        sum += 'seven';
        break;
      case '8':
        sum += 'eight';
        break;
      case '9':
        sum += 'nine';
        break;
      case '0':
        sum += 'zero';
        break;
      case '.':
        sum += 'point';
        break;
      case ',':
        sum += 'point';
        break;
      default:
        break;
    }
    if (i !== numberStr.length - 1) {
      sum = `${sum} `;
    }
  }
  return sum;
}
/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i < Math.floor(str.length / 2); i += 1) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let positiveNum = num;
  while (positiveNum > 0) {
    const currentDigit = positiveNum % 10;
    if (currentDigit === digit) {
      return true;
    }
    positiveNum = (positiveNum - currentDigit) / 10;
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let leftSum = 0;
    let rightSum = 0;
    for (let j = 0; j < i; j += 1) {
      leftSum += arr[j];
    }
    for (let k = i + 1; k < arr.length; k += 1) {
      rightSum += arr[k];
    }
    if (leftSum === rightSum) {
      return i;
    }
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = [];
  for (let i = 0; i < size; i += 1) {
    const row = [];
    for (let j = 0; j < i; j += 1) {
      row[j] = 0;
    }
    matrix[i] = row;
  }
  let currentNumber = 1;
  let top = 0;
  let bottom = size - 1;
  let left = 0;
  let right = size - 1;

  while (top <= bottom && left <= size) {
    for (let j = left; j <= right; j += 1) {
      matrix[top][j] = currentNumber;
      currentNumber += 1;
    }
    top += 1;
    for (let k = top; k <= bottom; k += 1) {
      matrix[k][right] = currentNumber;
      currentNumber += 1;
    }
    right -= 1;
    for (let g = right; g >= left; g -= 1) {
      matrix[bottom][g] = currentNumber;
      currentNumber += 1;
    }
    bottom -= 1;
    for (let l = bottom; l >= top; l -= 1) {
      matrix[l][left] = currentNumber;
      currentNumber += 1;
    }
    left += 1;
  }
  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const size = matrix.length;
  const resultMatrix = matrix;
  const tempResult = [];
  for (let i = 0; i < size; i += 1) {
    const row = [];
    tempResult[i] = row;
  }
  for (let i = 0; i < size; i += 1) {
    for (let j = 0; j < size; j += 1) {
      tempResult[i][j] = matrix[size - 1 - j][i];
    }
  }
  for (let i = 0; i < size; i += 1) {
    for (let j = 0; j < size; j += 1) {
      resultMatrix[i][j] = tempResult[i][j];
    }
  }
  return matrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const arrCopy = arr;
  const stack = [{ low: 0, high: arr.length - 1 }];
  let index = 0;

  while (index >= 0) {
    const { low, high } = stack[index];
    let i = low - 1;
    const povit = arr[high];

    for (let j = low; j < high; j += 1) {
      if (arrCopy[j] < povit) {
        i += 1;
        const temp = arrCopy[i];
        arrCopy[i] = arrCopy[j];
        arrCopy[j] = temp;
      }
    }

    const temp = arrCopy[i + 1];
    arrCopy[i + 1] = arrCopy[high];
    arrCopy[high] = temp;
    const povitIndex = i + 1;

    if (povitIndex - 1 > low) {
      stack[index] = { low, high: povitIndex - 1 };
      index += 1;
    }
    if (povitIndex + 1 < high) {
      stack[index] = { low: povitIndex + 1, high };
      index += 1;
    }
    index -= 1;
  }
  return arr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  const size = str.length;
  let copyArr = str;
  const bufferArr = [];

  for (let i = 0; i < iterations; i += 1) {
    let leftSide = '';
    let rightSide = '';
    for (let j = 0; j < size; j += 1) {
      if (j % 2 === 0) {
        leftSide += copyArr[j];
      } else {
        rightSide += copyArr[j];
      }
    }
    copyArr = leftSide + rightSide;
    bufferArr[i] = copyArr;

    if (copyArr === str) {
      return bufferArr[(iterations % (i + 1)) - 1];
    }
  }
  return copyArr;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const digits = [];
  let temp = number;

  while (temp > 0) {
    digits.push(temp % 10);
    temp = Math.floor(temp / 10);
  }
  digits.reverse();
  const size = digits.length;

  let i = -1;
  for (let r = size - 1; r > 0; r -= 1) {
    if (digits[r] > digits[r - 1]) {
      i = r - 1;
      break;
    }
  }

  if (i === -1) {
    return number;
  }
  let j = i + 1;
  for (let k = i + 1; k < size; k += 1) {
    if (digits[k] > digits[i] && digits[k] < digits[j]) {
      j = k;
    }
  }

  [digits[i], digits[j]] = [digits[j], digits[i]];
  const rightSide = digits.splice(i + 1).sort((a, b) => a - b);
  digits.push(...rightSide);

  return Number(digits.join(''));
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
