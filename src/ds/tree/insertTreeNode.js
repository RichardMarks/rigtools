/**
 * inserts a tree node into a tree as a child of the specified parent using the specified offset
 *
 * the offset allows you to specify the position in the children list where the new node will be inserted
 * + a negative offset will insert the new node at the beginning of the children list
 * + a positive offset will insert the new node at the end of the children list
 * + an offset of zero is treated as a positive offset
 *
 * @version 1.0.0
 * @param {{parent:object, node:object, offset:number}} config - destructured initialization object
 * @param {{id:string, children:Array}} config.parent - the tree node which serves as the parent of the new node
 * @param {{id:string, children:Array}} config.node - the new node to insert
 * @param {number} [config.offset=0] - injection offset position
 *
 * @example <caption>How to use</caption>
 *
 * const node = insertTreeNode({ parent, node, offset })
 */
const insertTreeNode = ({ parent, node, offset = 0 } = {}) => {
  if (offset < 0) {
    parent.children.unshift(node)
  } else {
    parent.children.push(node)
  }
}

module.exports = insertTreeNode
