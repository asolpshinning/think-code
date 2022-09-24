function kthSmallest(root){
  let results = [];
  let stack = [root];
  while(stack.length > 0){
    let current = stack.pop();
    console.log(current)
    if(current['left']) stack.push(current.left);
    kthSmallest(current.left)
    if(current.right !== null) stack.push(current.right);
    kthSmallest(current.right);
    results.push(current.val) 
  }
  return results;
}

let a = {val: 5};
let b = {val: 2}
a.left = b
let c = {val: 6};
a.right = c;



kthSmallest(a);


