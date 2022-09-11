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

let arr = [2,3]
console.log(Math.min(...arr))
