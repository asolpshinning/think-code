/* Write a function sumPossible that takes in an amount and an array of positive numbers. The function should return a boolean indicating whether or not it is possible to create the amount by summing numbers of the array. You may reuse numbers of the array as many times as necessary.

You may assume that the target amount is non-negative.

test_00:
sumPossible(8, [5, 12, 4]); // -> true, 4 + 4
test_01:
sumPossible(15, [6, 2, 10, 19]); // -> false
test_02:
sumPossible(13, [6, 2, 1]); // -> true
test_03:
sumPossible(103, [6, 20, 1]); // -> true
test_04:
sumPossible(12, []); // -> false
test_05:
sumPossible(12, [12]); // -> true
test_06:
sumPossible(0, []); // -> true
test_07:
sumPossible(271, [10, 8, 265, 24]); // -> false
test_08:
sumPossible(2017, [4, 2, 10]); // -> false
test_09:
sumPossible(13, [3, 5]); // -> true */

const sumPossible = (sum, array, memo={0: true}) => {
    if(sum in memo) return memo[sum];
    if(sum <0) return false;
    //if(sum === 0) return true;
    for(el of array){
        if(sumPossible(sum - el, array, memo) === false){console.log(`sum is now ${sum - el}`); memo[sum] = false}
        else {return true}
    } 
    memo[sum] = false;
    return memo[sum]
  }
  
  //console.log(sumPossible(8, [5, 12, 4]))
  // console.log(sumPossible(40, [8, 45, 59, 66]));
  // console.log(sumPossible(13, [3, 5]));
  console.log(sumPossible(2017, [4, 2, 10]))
  