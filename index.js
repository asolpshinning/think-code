/* Given a set of positive numbers, determine if a subset exists whose sum is equal to a given number ‘S’.

Example 1:#
Input: {1, 2, 3, 7}, S=6
Output: True
The given set has a subset whose sum is '6': {1, 2, 3}
Example 2:#
Input: {1, 2, 7, 1, 5}, S=10
Output: True
The given set has a subset whose sum is '10': {1, 2, 7}
Example 3:#
Input: {1, 3, 4, 8}, S=6
Output: False
The given set does not have any subset whose sum is equal to '6'. */

function findSum(x, arr) {
  let itExists = false;
  let sum;
  let arrTruths = new Array(x).fill(false);
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === i + 1) {
        arrTruths[i] = true;
      } else if (arr[j] < i + 1) {
        sum += arr[j];
        if (sum === i + 1) {
          arrTruths[i] = true;
        }
      }
    }
  }
  return arrTruths;
}

const answerArr = (sum, arrQ) => {
  let i = 0;
  let arr;
  while (i < sum) {
    arr[i] = findSum(sum, arrQ);
    i++;
  }
  return arr;
};

function getAnswer(sum, arr) {}

console.log(findSum(6, [1, 2, 3, 7]));
console.log(findSum(10, [1, 6, 7, 1, 5]));
