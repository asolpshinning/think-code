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

function isThereSubset(sum, arr = []){
 
    
    if(arr.includes(sum)) {log(`array contains ${sum}`);  return true}
    if(sum === 1) {log(`array contains 1`);  return arr.includes(1)}
    if(sum === 0) {log(`array contains 0`);  return true}

    let ret = false;
    let i = 1;
    let initArr= [0];
    let newArr;
    while(i<=sum){
      
      newArr = [...arr,1000, 2000]
      newArr.splice(i,1); log(`At loop ${i}, newArr is ${newArr} and old arr is ${arr}`)
      if(arr.includes(i) && isThereSubset(sum - i, newArr)){log(`Running loop ${i} at line 52: ${true}`); ret = true; break;}
      else {log(`running else`); i++ };
    }

  return ret;
}

//console.log(isThereSubset(10, [1,2,3,4,5]))
console.log(isThereSubset(19, [6, 1, 3, 6, 5]));



