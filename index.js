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

function log(x){
  console.log(x)
}

function findSum(x, arr) {
  let itExists = false;
  let arrTruths = new Array(x).fill(false); //for numbers from 1 to x
  let i = 0;
  while ( i < x) {
    let sum = 0;
    //start with each element in the array and then add the next number to it until you hit the expected sum, i
    let j = 0;
    while(j < arr.length) {
      if (arr[j] === i + 1) {
        arrTruths[i] = true;
        log(`for sum ${i+1}, ${arr[j]} exists in the array. So there is a subset `)
        j = arr.length + 1
        
      } else if (arr[j] < i + 1) {
        sum += arr[j];
        if (sum === i + 1) {
          arrTruths[i] = true;
          log(`for sum ${i+1}, we have summed some array elements to equal sum. So there is a subset `)
          j = arr.length + 1
        } else if(sum > i+1){
          sum -= arr[j];
        }
        else {
          log(`for sum ${i+1}, sum is currently ${sum}... still looking for a complete subset `);
          j++
      }
      } else {j = j + 1; console.log(`here right now`)}
    }
    i = i + 1;
    console.log(`now going to run i = ${i}`)
  }
  return arrTruths;
}
console.log(findSum(4, [5, 2, 3, 7]));
//console.log(findSum(10, [6, 1, 7, 3, 5]));



