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

//3 = 111 or 12 or 
//4 = 1111 or 13 or 22
//5 = 11111 or 14

//S0lution 1
function isThereSubset(sum, arr){
  let i = 0
  while(i < sum){
    if(arr.includes(sum)) {log(`array contains ${sum}`); i++; return true}
    else if(sum === 1) {log(`array contains 1 in loop ${i}`); i++; return arr.includes(1)}
    else if(sum === 0) {log(`array contains 0 in loop ${i}`); i++; return true}
    else if(isThereSubset(i, arr) && isThereSubset(sum - i, arr)){log(`line 30: `, true); i++; return true}
    else {log(`running else`); i++;}; 
  }

}

console.log(isThereSubset(10, [1,2,3,4,5]))
//console.log(isThereSubset(10, [6, 1, 7, 3, 5]));



