/**
 * deletes a tree node specified by id from a tree
 * **all children of the deleted node will be deleted as well**
 *
 * @version 1.0.0
 * @param {{tree:object, id:string}}} config - destructured initialization object
 * @param {{id:string, children:Array}} config.tree - the tree root to search for the node to be deleted
 * @param {string} config.id - id of the node to delete
 *
 * @example <caption>How to use</caption>
 *
 * const node = deleteTreeNode({ tree, id: 'target-tree-node' })
 */
const deleteTreeNode = ({ tree, id } = {}) => {
  if (tree.id === id) {
    tree.children.length = []
  } else {
    const queue = [tree]

    while (queue.length) {
      const node = queue.shift()

      for (let i = 0; i < node.children.length; i += 1) {
        if (node.children[i].id === id) {
          node.children.splice(i, 1)
        } else {
          queue.push(node.children[i])
        }
      }
    }
  }
}

module.exports = deleteTreeNode
