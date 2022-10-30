function stairs(n, cache = {}){
    if (n === 0 ) cache[n] =  1;
    else if (n === 1 ) cache[n] =  1;
    else if (n === 2) cache[n] =  2;
    else if (n in cache) return cache[n];
    else cache[n] = stairs(n-1, cache) + stairs(n-2, cache);

    return cache[n];

}

console.log(stairs(45));