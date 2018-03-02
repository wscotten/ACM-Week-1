let bfs = (nodeTotal, edgesArray, rootNode) => {
  const Graph = [];
  for (let i = 0; i < nodeTotal; i++) {
    Graph.push({
      edges: [],
      color: "white",
      distance: Infinity,
      parent: null,
      id: `edge ${i}`
    });
  }
  for (let i = 0; i < edgesArray.length; i++) {
    Graph[edgesArray[i][0]].edges.push(edgesArray[i][1]);
    Graph[edgesArray[i][1]].edges.push(edgesArray[i][0]);
  }

  Graph[rootNode] = {
    ...Graph[rootNode],
    color: "grey",
    distance: 0
  };

  let priorityQueue = [rootNode];
  while (priorityQueue.length) {
    let node = Graph[priorityQueue.shift()];
    node.edges.filter(edge => Graph[edge].color === "white").forEach(edge => {
      Graph[edge] = {
        ...Graph[edge],
        color: "grey",
        distance: node.distance + 1,
        parent: node.id
      };
      priorityQueue.push(edge);
    });
    node.color = "black";
  }
  return Graph;
};

// trial test case
const edges = [[0, 1], [0, 2]];

const result = bfs(4, edges, 0);

const answer = result.filter(node => node.distance > 0).map(({ distance }) => {
  return distance === Infinity ? -1 : distance * 6;
});

console.log(result);

console.log(answer.join(" ")); // should be 6 6 -1
