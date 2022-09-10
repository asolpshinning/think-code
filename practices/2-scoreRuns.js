/* 
Link => https://www.educative.io/module/lesson/dp-in-python/my6YooA9q90
Imagine a game where, in each turn, a player can score either 1, 2
1,2
 or 4
4
 runs. Given a score, n, find the total number of ways to score n runs. 
Link => https://www.educative.io/module/lesson/dp-in-python/my6YooA9q90
 */

//number of ways of having score 1 = 1
//number of ways of having score 2 = n(1) and 1 + n(0) and 2 = 2
//number of ways of having score 10 = n(10) = n(9) and 1
//number of ways having score 9 = n(9) = n(8) and 2
//n(7) = n(6) and 1 + n(5) and 2 + n(3) and 4

function n(arg) {
    let arr = [0, 1];
    function ch(x) {
      if (x < 0) return 0;
      else if (x === 0) return 1;
      else return arr[x];
    }
    for (let i = 2; i <= arg; i++) {
      arr[i] = ch(i - 1) + ch(i - 2) + ch(i - 4);
    }
    return arr[arg];
  }
  console.log(n(7));
  