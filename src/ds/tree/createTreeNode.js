/**
 * creates a new tree node plain data object suitable for use in state
 *
 * @version 1.0.0
 * @param {{id:string, data:*}} config - destructured initialization object
 * @param {string} [config.id='tree'] - id to give the tree, should be unique
 * @param {*} [config.data=undefined] - any data to associate with the tree node
 * @return {{id:string, children:Array}} - tree node plain data object
 * @property {string} id - node identifier
 * @property {?*} data - node data
 * @property {Array<{id:string, children:Array}>} children - list of child tree node plain data objects
 *
 * @example <caption>How to use</caption>
 *
 * const node = createTreeNode({ id: 'my-tree-node', data: { name: 'My Tree Node' } })
 */
const createTreeNode = ({ id = 'tree', data } = {}) => {
  return {
    id,
    data,
    children: []
  }
}

module.exports = createTreeNode
