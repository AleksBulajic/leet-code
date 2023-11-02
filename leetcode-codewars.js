// * 1. Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
function booleanToWord(bool) {
  if (bool === true) {
    return "Yes";
  } else {
    return "No";
  }
}
console.log(booleanToWord(true));
console.log(booleanToWord(false));

/*  
*2.Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
*
For example,

* [true,  true,  true,  false,
 * true,  true,  true,  true ,
 * true,  false, true,  false,
   *true,  false, false, true ,
 * true,  true,  true,  true ,
 * false, false, true,  true]
*The correct answer would be 17.

* Hint: Don't forget to check for bad values like null/undefined */

function countSheeps(sheep) {}

// Test cases
console.log(
  countSheeps([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
);
// Expected output: 17

console.log(
  countSheeps([
    true,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
);
// Expected output: 16

console.log(
  countSheeps([
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ])
);
// Expected output: 24

/*  
*  3. Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
*
For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
*
[10, 343445353, 3453445, 3453545353453] should return 3453455. */

function sumOfTwoSmallest(numbers) {
  let sortedNumbers = numbers.sort(function (a, b) {
    return a - b;
  });
  let sum = sortedNumbers[0] + sortedNumbers[1];

  return sum;
}

console.log(sumOfTwoSmallest([5, 3, 8, 1, 2]));
console.log(sumOfTwoSmallest([12, 25, 17, 31, 2]));

/* 
 * 4. Can you find the needle in the haystack?

*Write a function findNeedle() that takes an array full of junk but containing one "needle"

*After your function finds the needle it should return a message (as a string) that says:

*"found the needle at position " plus the index it found the needle, so:

*Example(Input --> Output)

*["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
*Note: In COBOL, it should return "found the needle at position 6"
*/

function findNeedle(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== "needel") {
      return "NO needel found";
    }
  }

  let needle = array.indexOf("needle");
  let result = `found the neelde at positiom ${needle}`;
  return result;
}

console.log(
  findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])
);
console.log(findNeedle(["hay", "needle", "hay", "hay"]));
console.log(
  findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "randomJunk"])
);

/*
 * 5. Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

* Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
*/

function loveFunc(flower1, flower2) {
  if (
    (flower1 % 2 === 0 && flower2 % 2 !== 0) ||
    (flower1 % 2 !== 0 && flower2 % 2 === 0)
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(loveFunc(1, 4)); // This should return true
console.log(loveFunc(2, 2)); // This should return false
console.log(loveFunc(3, 6)); // This should return true
console.log(loveFunc(4, 8)); // This should return false

/*
 6. Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

[Make sure you type the exact thing I wrote or the program may not execute properly]
*/

function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}

console.log(greet("Alex"));
console.log(greet("Emily"));
console.log(greet("John"));

/*
 7. Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).
*/

function oddOrEven(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  if (sum % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(oddOrEven([0, 1, 3]));
console.log(oddOrEven([0, 2, 3]));
console.log(oddOrEven([0, 3, 3]));

/*
8. An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
*/
function isIsogram(string) {
  string = string.toLowerCase();
  for (let i = 0; i < string.length; i++) {
      for (let j = i + 1; j < string.length; j++) {
          if (string[i] === string[j]) {
              return false;
          }
      }
  }
  return true;
}

console.log(isIsogram("Dermatoglyphics")); // Expected output: true
console.log(isIsogram("aba")); // Expected output: false
console.log(isIsogram("moOse")); // Expected output: false
console.log(isIsogram("Marko"));  // Expected output: true

/*
 9. Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

 if array is empty return -1

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
*/

function targetIndex(numbers, target) {
  if (numbers.length === 0) {
    return -1;
  }

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
      let index = numbers.indexOf(target);
      return index;
    } else if (numbers[i] !== target) {
      numbers.push(target);
      numbers.sort();
      return numbers.indexOf(target);
    } else {
      return "somethig went wrong";
    }
  }
}

console.log(targetIndex([1, 3, 5, 6], 5));
console.log(targetIndex([1, 3, 5, 6], 2));
console.log(targetIndex([1, 3, 5, 6], 7));
console.log(targetIndex([], 7));
