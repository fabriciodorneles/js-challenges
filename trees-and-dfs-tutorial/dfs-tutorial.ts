class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(value: number, left: TreeNode | null = null, right: TreeNode | null = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

// Função para mostrar graficamente a árvore no console
function printTree(node: TreeNode | null, prefix: string = "", isLeft: boolean = true) {
    if (node !== null) {
        console.log(prefix + (isLeft ? "├── " : "└── ") + node.value);
        printTree(node.left, prefix + (isLeft ? "│   " : "    "), true);
        printTree(node.right, prefix + (isLeft ? "│   " : "    "), false);
    }
}

// Criando a árvore
//      1
//     / \
//    2   3
//   / \ /
//  4  5 6

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);

// DFS Pre Order (Depth First Search)
// Root -> Left -> Right
function dfsPreorder(node: TreeNode | null) {
    if (node) {
        // show the current node value
        console.log(node.value);
        // recursively show the left and right nodes
        dfsPreorder(node.left);
        dfsPreorder(node.right);
    }
}

// DFS In Order (Depth First Search)
// Left -> Root -> Right
function dfsInorder(node: TreeNode | null) {
    if (node) {
        dfsInorder(node.left);
        console.log(node.value);
        dfsInorder(node.right);
    }
}

// DFS Post Order (Depth First Search)
// Left -> Right -> Root
function dfsPostorder(node: TreeNode | null) {
    if (node) {
        dfsPostorder(node.left);
        dfsPostorder(node.right);
        console.log(node.value);
    }
}


console.log('The Tree:');
console.log('       1');
console.log('     /   \\');
console.log('    2      3');
console.log('   / \\    /');
console.log('  4   5  6');
// printTree(root);
console.log('-------------------');
console.log('DFS Pre Order:');
dfsPreorder(root);
console.log('-------------------');
console.log('-------------------');
console.log('The Tree:');
console.log('       1');
console.log('     /   \\');
console.log('    2      3');
console.log('   / \\    /');
console.log('  4   5  6');
// printTree(root);
console.log('-------------------');
console.log('DFS in Order:');
dfsInorder(root);
console.log('-------------------');
console.log('-------------------');
console.log('The Tree:');
console.log('       1');
console.log('     /   \\');
console.log('    2      3');
console.log('   / \\    /');
console.log('  4   5  6');
// printTree(root);
console.log('-------------------');
console.log('DFS Post Order:');
dfsPostorder(root);
