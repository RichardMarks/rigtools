/**
 * prints the tree to the console
 *
 * @version 1.0.0
 * @param {{tree:object, showData:boolean,showChildCount:boolean,linear:boolean}}} config - destructured initialization object
 * @param {{id:string, children:Array}} config.tree - the tree root to start printing
 *
 * @example <caption>How to use</caption>
 *
 * // print the tree in a linear fashion where each depth is on a new line
 * printTree({ tree, linear: true })
 *
 * // print the tree in an expanded hierarchial display showing branches of the tree
 * printTree({ tree, linear: false })
 *
 * // print the tree in an expanded hierarchial display showing branches of the tree
 * // and display the number of children each node contains
 * printTree({ tree, showChildCount: true })
 *
 * // print the tree in an expanded hierarchial display showing branches of the tree
 * // and display the data of each node using JSON.stringify
 * printTree({ tree, showData: true })
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
 */
const printTree = ({ tree, showData = false, showChildCount = false, linear = false } = {}) => {
  if (linear) {
    const terminal = { data: '\n', children: [] }
    const queue = [tree, terminal]
    const display = []

    while (queue.length) {
      const node = queue.shift()

      if (node) {
        const data = showData ? `data=${JSON.stringify(node.data)}` : ''
        const kids = showChildCount ? `(${node.children.length})` : ''

        display.push(`[${node.id}] ${data}${kids}`)

        if (node === terminal && queue.length) {
          queue.push(terminal)
        }

        for (let i = 0; i < node.children.length; i += 1) {
          queue.push(node.children[i])
        }
      }
    }

    console.log(display.join('').slice(0, -2).trim())
  } else {
    const stack = [tree]
    const list = [stack]
    const display = []

    while (list.length) {
      const stack = list[list.length - 1]

      if (!stack.length) {
        list.pop()
      } else {
        const node = stack.shift()

        if (node) {
          const inset = []

          for (let i = 0; i < list.length - 1; i += 1) {
            inset.push(list[i].length > 0 ? '|  ' : '   ')
          }

          const data = showData ? `\n${inset.join('')}  data=${JSON.stringify(node.data)}` : ''
          const kids = showChildCount ? `(${node.children.length})` : ''

          display.push(`${inset.join('')}+- [${node.id}]${kids}${data}\n`)

          if (node.children.length) {
            list.push([...node.children])
          }
        }
      }
    }

    console.log(display.join('').trim())
  }
}

module.exports = printTree
