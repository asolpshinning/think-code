function longSub(s1, s2, i=0, j=0, memo = {}){
    const key = i + ',' + j;
    if(key in memo) return memo[key];
    if(i === s1.length || j === s2.length) return 0;
    if(s1 === s2) return s1.length;

    //let big = s1.length > s2.length ? s1.length : s2.length

    if(s1[i] === s2[j] ) {
        memo[key] =  1 + longSub(s1, s2, i+1, j+1, memo)
    }
    else if(s1[i] != s2[j] ){
        const one = longSub(s1, s2, i+1, j, memo)
        const two = longSub(s1, s2, i, j+1, memo)
        memo[key] = Math.max(one, two)
    } 
   return memo[key]; 
}

const overlapSubsequence = (str1, str2, i = 0, j = 0, memo = {}) => {
    const key = i + ',' + j;
    if (key in memo) return memo[key];
    
    if (i === str1.length || j === str2.length) return 0;
    
    if (str1[i] === str2[j]) {
      memo[key] = 1 + overlapSubsequence(str1, str2, i + 1, j + 1, memo);
    } else {
      memo[key] = Math.max(
        overlapSubsequence(str1, str2, i + 1, j, memo),
        overlapSubsequence(str1, str2, i, j + 1, memo)
      );
    }
    
    return memo[key];
  };

console.log(longSub("xfeqortsver", "feeeuavoeqr"))

console.log(overlapSubsequence("xfeqortsver", "feeeuavoeqr"))





/* let array = [3,4,6,8,9,2]
let i =0
while(i<6){
    let newArr = array.map((x,ind) => {
        if(i === ind) x = 0
        return x
    }); 
    console.log(newArr)
    i++
} */

/* let arr = [2,3]
console.log(Math.min(...arr)) */
