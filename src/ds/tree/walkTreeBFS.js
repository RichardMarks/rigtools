/**
 * walk through the tree using a breadth-first search (BFS) and call visitor function for each tree node
 *
 * @version 1.0.0
 * @param {{tree:object, visitor:function(node:{id:string, children:Array})}} config - destructured initialization object
 * @param {{id:string, children:Array}} config.tree - the tree to walk
 * @param {function(node:{id:string, children:Array})} config.visitor - function to call for each tree node in the tree
 *
 * @example <caption>How to use</caption>
 *
 * walkTreeBFS({ tree, visitor (node) { console.log('visiting node', node.id) } })
 *
 * @see https://en.wikipedia.org/wiki/Breadth-first_search
 */
const walkTreeBFS = ({ tree, visitor }) => {
  const queue = [tree]

  while (queue.length) {
    const node = queue.shift()

    if (node) {
      visitor && visitor(node, tree)

      for (let i = 0; i < node.children.length; i += 1) {
        queue.push(node.children[i])
      }
    }
  }
}

module.exports = walkTreeBFS
