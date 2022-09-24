function bestBridge(grid) {
    var islands = findIslands(grid);
    var [island1, island2] = islands;
    var minBridge = Infinity;
    for (var i = 0; i < island1.length; i++) {
        for (var j = 0; j < island2.length; j++) {
            var [x1, y1] = island1[i];
            var [x2, y2] = island2[j];
            var distance = Math.abs(x1 - x2) + Math.abs(y1 - y2) - 1;
            minBridge = Math.min(minBridge, distance);
        }
    }

    function findIslands(grid) {
        var islands = [];
        for (var i = 0; i < grid.length; i++) {
            for (var j = 0; j < grid[i].length; j++) {
                if (grid[i][j] === 'L') {
                    var island = exploreIsland(grid, i, j);
                    islands.push(island);
                }
            }
        }
        return islands;
    }
    //write the exploreIsland function
    function exploreIsland(grid, i, j) {
        var island = [];
        var stack = [[i, j]];
        while (stack.length > 0) {
            var [i, j] = stack.pop();
            if (grid[i][j] === 'L') {
                island.push([i, j]);
                grid[i][j] = 'V';
                if (i > 0) {
                    stack.push([i - 1, j]);
                }
                if (i < grid.length - 1) {
                    stack.push([i + 1, j]);
                }
                if (j > 0) {
                    stack.push([i, j - 1]);
                }
                if (j < grid[i].length - 1) {
                    stack.push([i, j + 1]);
                }
            }
        }
        return island;
    }

    return minBridge;


}

const grid = [
    ["W", "W", "W", "W", "W"],
    ["W", "W", "W", "L", "W"],
    ["L", "W", "W", "W", "W"],
  ];
console.log(bestBridge(grid)); // -> 3