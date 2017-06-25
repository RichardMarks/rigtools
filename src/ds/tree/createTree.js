/**
 * creates a new tree root plain data object suitable for use in state
 *
 * @version 1.0.0
 * @param {{id:string}} config - destructured initialization object
 * @param {string} [config.id='tree'] - id to give the tree, should be unique
 * @return {{id:string, children:Array}} - tree root plain data object
 * @property {string} id - node identifier
 * @property {?*} data - node data
 * @property {Array<{id:string, children:Array}>} children - list of child tree node plain data objects
 *
 * @example <caption>How to use</caption>
 *
 * const tree = createTree({ id: 'my-tree' })
 */
const createTree = ({ id = 'tree' } = {}) => {
  return {
    id,
    data: { name: 'Default Tree Root' },
    children: []
  }
}

module.exports = createTree
