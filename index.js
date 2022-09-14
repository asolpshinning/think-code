/* can concat
Write a function, canConcat, that takes in a string and an array of words as arguments. The function should return boolean indicating whether or not it is possible to concatenate words of the array together to form the string.

You may reuse words of the array as many times as needed.

test_00:
canConcat("oneisnone", ["one", "none", "is"]); // -> true
test_01:
canConcat("oneisnone", ["on", "e", "is"]); // -> false
test_02:
canConcat("oneisnone", ["on", "e", "is", "n"]); // -> true
test_03:
canConcat("foodisgood", ["is", "g", "ood", "f"]); // -> true
test_04:
canConcat("santahat", ["santah", "hat"]); // -> false
test_05:
canConcat("santahat", ["santah", "san", "hat", "tahat"]); // -> true
test_06:
canConcat("rrrrrrrrrrrrrrrrrrrrrrrrrrx", ["r", "rr", "rrr", "rrrr", "rrrrr", "rrrrrr"]); // -> false
test_07:
canConcat("fooisgood", ["foo", "is", "g", "ood", "f"]); // -> true */


const canConcat = (str, words, i = 0) => {
  
  function find(s){
    let check = '';
    while(i<s.length){
      check += s[i]
      if(words.includes(check)) check = ''
      i++
    }

    if(check.length === 0) return true
    else return false
  }
  let ans;
  let j = 1
  while(j <= str.length){
    if(j === str.length) ans = words.includes(str) 
    else ans = words.includes(str.substring(0,j)) && find(str.substring(j+1, str.length))
    console.log(str.substring(0,j) + ' ' + str.substring(j+1,str.length) + ' ' + words.includes(str.substring(0,j)) + ' and ' + find(str.substring(j+1, str.length)))
    //console.log(str.substring(2,5))
    if (ans === true) return ans;
    j++
  }
  
  return ans
  
  
};
console.log(`Answer is: `, canConcat('heythere', ['h', 'hey', 'the']))