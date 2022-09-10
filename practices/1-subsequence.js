//need to refactor this
/* Find the maximum sum of a subsequence in a given array such that no consecutive elements are part of this subsequence.

Examples#
Consider the following examples:

In the example below, the maximum sum of a subsequence with no consecutive elements is 25
25
:
1
6
10
14
-5
-1
2
-1
3
max sum = 25
Note: We did not pick 10
10
 and 14
14
 at indices 2 and 3 because they are adjacent. We are only allowed to pick non adjacent elements. */

 function firstOne(A) {
    let currSum = 0;
    let globalSum = 0;
    let justAdded = false;
    //start from the first positive number and add all next non-consecutive positive numbers
    for (let i = 1; i < A.length; i++) {
      //get the first positive number at A[0]
      //check if A[2], A[4] etc... is positive     //if positive, add to current sum
      if (A[i] > 0 && justAdded === false) {
        currSum += A[i];
        justAdded = true;
        console.log(`added: ${A[i]}`);
        if (currSum > globalSum) globalSum = currSum;
      } else if (A[i] > 0 && justAdded === true) {
        justAdded = false;
      } else {
        justAdded = false;
      }
      //if (currentSum >  globalSum) globalSum = currentSum
    }
    return globalSum;
  }
  //start from second positive number and add all next non-consecutive positive numbers
  function secondOne(A) {
    let currSum = 0;
    let globalSum = 0;
    let justAdded = false;
    //start from the first positive number and add all next non-consecutive positive numbers
    for (let i = 0; i < A.length; i++) {
      //get the first positive number at A[0]
      //check if A[2], A[4] etc... is positive     //if positive, add to current sum
      if (A[i] > 0 && justAdded === false) {
        currSum += A[i];
        justAdded = true;
        console.log(`added2: ${A[i]}`);
      } else if (A[i] > 0 && justAdded === true) {
        justAdded = false;
      } else {
        justAdded = false;
      }
      //if (currentSum >  globalSum) globalSum = currentSum
      if (currSum > globalSum) globalSum = currSum;
    }
    return globalSum;
  }
  //main function
  function main(A) {
    let one = firstOne(A);
    let two = secondOne(A);
    if (one > two) return one;
    else return two;
  }
  
  let A = [1, 6, 10, 14, -5, -1, 2, -1, 3];
  console.log(main(A));
  