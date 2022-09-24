function prereqsPossible(n, prereqs) {
    var graph = buildGraph(n, prereqs);
    var visited = new Set();
    var visiting = new Set();
    for (var course in graph) {
        if (isCyclic(course, graph, visited, visiting)) {
            return false;
        }
    }
    //write the isCyclic function
    function isCyclic(course, graph, visited, visiting) {
        console.log(`visited has ${course} is: `, visited.has(course))
        if (visited.has(course)) {
            return false;
        }
        visiting.add(course);
        console.log(`visiting just added `, course)
        for (var neighbor of graph[course]) {
            console.log(`Looping through ${neighbor} and visiting has neighbor is ${visiting.has(neighbor)}`)
            if (visiting.has(neighbor) || isCyclic(neighbor, graph, visited, visiting)) {
                return true;
            }
        }
        visiting.delete(course);
        console.log(`visiting just deleted `, course)
        visited.add(course);
        console.log(`visitED just added `, course)
        return false;
    }
    //write the buildGraph functio
    function buildGraph(n, prereqs) {
        var graph = {};
        for (var i = 0; i < n; i++) {
            graph[i] = new Set();
        }
        for (var prereq of prereqs) {
            var [course, prereq] = prereq;
            graph[course].add(prereq);
        }
        return graph;
    }


    return true;
}

const numCourses = 8;
const prereqs = [
  [1, 0],
  [0, 6],
  [2, 0],
  [0, 5],
  [3, 7],
  [4, 3],
];
prereqsPossible(numCourses, prereqs); // -> true