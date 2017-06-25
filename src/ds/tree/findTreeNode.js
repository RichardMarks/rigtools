/**
 * searches a tree for a tree node specified by id
 *
 * @version 1.0.0
 * @param {{tree:object, id:string}} config - destructured initialization object
 * @param {{id:string, children:Array}} config.tree - the tree root to search
 * @param {string} config.id - id of the node to find
 * @return {?{id:string, children:Array}} found node or null if not found
 *
 * @example <caption>How to use</caption>
 *
 * const node = findTreeNode({ tree, id: 'target-tree-node' })
 */
const findTreeNode = ({ tree, id } = {}) => {
  const queue = [tree]

  while (queue.length) {
    const node = queue.shift()

    if (node.id === id) {
      return node
    } else {
      for (let i = 0; i < node.children.length; i += 1) {
        queue.push(node.children[i])
      }
    }
  }

  return null
}

module.exports = findTreeNode
