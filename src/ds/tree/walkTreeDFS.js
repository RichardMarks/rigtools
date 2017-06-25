/**
 * walk through the tree using a depth-first search (DFS) and call visitor function for each tree node
 *
 * @version 1.0.0
 * @param {{tree:object, visitor:function(node:{id:string, children:Array})}} config - destructured initialization object
 * @param {{id:string, children:Array}} config.tree - the tree to walk
 * @param {function(node:{id:string, children:Array})} config.visitor - function to call for each tree node in the tree
 *
 * @example <caption>How to use</caption>
 *
 * walkTreeDFS({ tree, visitor (node) { console.log('visiting node', node.id) } })
 *
 * @see https://en.wikipedia.org/wiki/Depth-first_search
 */
const walkTreeDFS = ({ tree, visitor, order = 'post' }) => {
  const stack = [tree]

  if (order === 'post') {
    while (stack.length) {
      const node = stack.shift()

      if (node) {
        for (let i = 0; i < node.children.length; i += 1) {
          stack.unshift(node.children[i])
        }

        visitor && visitor(node, tree)
      }
    }
  } else if (order === 'pre') {
    while (stack.length) {
      const node = stack.shift()

      if (node) {
        visitor && visitor(node, tree)

        for (let i = 0; i < node.children.length; i += 1) {
          stack.unshift(node.children[i])
        }
      }
    }
  }
}

module.exports = walkTreeDFS
