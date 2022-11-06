/* 
for each coin
    use each coin from 0 to any number that is not greater than the amount
        let the loop be from 0 to that number and use recursion inside the loop to change it for each coin
            it is like several loops of trying different numbers inside each coin loop
        Anywhere 0 is left, it means we have a good combination that gives the amount

*/

function change(amount, coins, i = 0, cache = {}){
    let key = `${i}${amount}`;
    if(key in cache) return cache[key];
    if(amount === 0) {
        cache[key] = 1;
        return 1;
    } 
    if(coins.length === 0) return 0;
    if(i >= coins.length) {
        cache[key] = 0;
        return 0;
    }
    let count = 0;
    for(let qty = 0; qty*coins[i] <= amount; qty++){
        let remainder = amount - qty*coins[i];
        count += change(remainder, coins, i+1, cache);
    }
    cache[key] = count;
    return count;
}

console.log(change(100, [4,2,7,9,5,10]))