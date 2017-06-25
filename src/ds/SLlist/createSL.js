/**
 * creates a new singly linked list head node object suitable for use in state
 * 
 * @param {{id:string}} config - destructured initialization object
 * @param {string} [config.id='tree'] - id to give the SLlist, should be unique
 * @return {{id:string, next:object}} - SLlist head node plain data object
 * @property {string} id - node identifier
 * @property {?*} data - node data
 * @property {object<{id:string, next:object}>} next - the next SLlist node plain data object
 *
 * @example <caption>How to use</caption>
 *
 * const tree = createSLlist({ id: 'my-tree' })
 */

const createSL = ({ id = 'SL' } = {}) => {
  return {
    id,
    data: { name: 'Default SL Head NOde'},
    next: undefined
  }
} 

module.exports = createSL