function repeatedNum(arr){
    let sum = 0
    for(let el of arr){
      sum += el
    }
    for(let i = 1 ; i <= arr.length-1; i++){
      sum -= i
    }
    return sum
  }
  
  console.log(repeatedNum([1,3,4,2,2]))
  console.log(repeatedNum([3,1,3,4,2]))

  //refactored
  function repeatedNum(arr){
    let sum = 0
    for(let i = 1; i <= arr.length;  i++){
      sum += arr[i-1];
      if(i <= arr.length -1) sum -= i;
    }
    return sum
  }
  
  console.log(repeatedNum([1,3,4,2,2]))
  console.log(repeatedNum([3,1,3,4,2]))