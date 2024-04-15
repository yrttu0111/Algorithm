function bfs(root) {
  visited = [];
  if (root == null) return 0;
  let queue = [root];
  while (queue.length > 0) {
    let node = queue.shift();
    visited.push(node);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return visited;
}
console.log(bfs([3, 9, 20, null, null, 15, 7])); // [3,9,20,15,7]
