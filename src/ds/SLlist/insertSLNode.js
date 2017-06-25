/**
 * inserts a tree node into a tree as a child of the specified parent using the specified offset
 *
 * the offset allows you to specify the position in the children list where the new node will be inserted
 * + a negative offset will insert the new node at the beginning of the singly-linked list
 * + a positive offset will insert the new node at the end of the singly-linked list
 * + an offset of zero is treated as an insertion at specified node
 *
 * @version 1.0.0
 * @param {{parent:object, node:object, offset:number}} config - destructured initialization object
 * @param {{id:string, children:Array}} config.parent - the tree node which serves as the parent of the new node
 * @param {{id:string, children:Array}} config.node - the new node to insert
 * @param {number} [config.offset=0] - injection offset position
 * @return {list:object} list - returns new list with inserted node
 * @example <caption>How to use</caption>
 * 
 */

const insertSLNode = ( list, node, offset = 0, atGivenNode = {}) => {
  // at beginning
  if (offset < 0) {
    node.next = list
    return node
    // at end
  } else if (offset > 0) {
    const insertAtEnd = (list) => {
      console.log('list.next ->', list.next)
      list.next ? insertAtEnd(list.next) : list.next = node
    }
    insertAtEnd(list)
  } else {
    // at given node id or data
    if (!list.id && !list.data) {
      throw new Error('need to specify either the id or data of node to insert at')
    }
    const insertAtNode = (list, id = '', data = '') => {
      if (list.id === id || list.data === data) {
        const tempList = list.next
        delete list.next
        list.next = node
        node.next = tempList
      } else {
        !!list.next && insertAtNode(list.next,id, data)
      }
    }
    insertAtNode(list, atGivenNode.id, atGivenNode.data)
  }
}

module.exports = insertSLNode
