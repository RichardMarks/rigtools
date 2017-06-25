const treeApi = require('../ds/tree')

// create a tree root node
const tree = treeApi.createTree({ id: 'my-tree' })

// insert a child node into the tree as a child of the root node
// offset here is optional and used for demonstration purposes. zero is the default offset
treeApi.insertTreeNode({
  parent: tree,
  offset: 0,
  node: treeApi.createTreeNode({
    id: 'child',
    data: {
      name: 'Child Node'
    }
  })
})

// insert a child node into the tree as a child of the root node
// negative offset causes the node to be inserted at the beginning of the parent children list
// a positive offset would cause the node to be inserted at the end of the parent children list
treeApi.insertTreeNode({
  parent: tree,
  offset: -1,
  node: treeApi.createTreeNode({
    id: 'sibling',
    data: {
      name: 'Sibling Node'
    }
  })
})

treeApi.insertTreeNode({
  parent: treeApi.findTreeNode({ tree, id: 'child' }),
  node: treeApi.createTreeNode({
    id: 'grandchild',
    data: {
      name: 'Grandchild Node'
    }
  })
})

treeApi.insertTreeNode({
  parent: treeApi.findTreeNode({ tree, id: 'grandchild' }),
  node: treeApi.createTreeNode({
    id: 'great-grandchild',
    data: {
      name: 'Great Grandchild Node'
    }
  })
})

// walk through the tree using a breadth-first-search and call visitor function for each tree node
treeApi.walkTreeBFS({
  tree,
  visitor (node) {
    console.log(`The current node ${node.id} data name is ${node.data.name}`)
  }
})

// delete the sibling node and all children of the sibling from the tree
treeApi.deleteTreeNode({ tree, id: 'sibling' })

// walk through the tree using a depth-first-search and call visitor function for each tree node
treeApi.walkTreeDFS({
  tree,
  visitor (node) {
    console.log(`The current node ${node.id} data name is ${node.data.name}`)
  }
})

// print the tree in a linear fashion where each depth is on a new line
treeApi.printTree({ tree, linear: true })

// print the tree in an expanded hierarchial display showing branches of the tree
treeApi.printTree({ tree, linear: false })
