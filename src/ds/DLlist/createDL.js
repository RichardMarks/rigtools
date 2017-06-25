/**
 * creates a new doubly linked list head node object suitable for use in state
 * 
 * @param {{id:string}} config - destructured initialization object
 * @param {string} [config.id='tree'] - id to give the DLlist, should be unique
 * @return {{id:string, next:object, parent:object}} - DLlist head node plain data object
 * @property {string} id - node identifier
 * @property {?*} data - node data
 * @property {object<{id:string, next:object}>} next - next DLlist node plain data object
 * 
 *
 * @example <caption>How to use</caption>
 *
 * const tree = createDLl({ id: 'my-tree' })
 */

const createDL = ({ id = 'SLlist' } = {}) => {
  return {
    id,
    data: { name: 'Default SLlist Head NOde'},
    parent: undefined,
    next: undefined
  }
} 

module.exports = createDL