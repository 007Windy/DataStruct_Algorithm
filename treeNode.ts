/**
 * 二叉树 广度遍历
 */
class TreeNode {
    value: number
    left?: TreeNode
    right?: TreeNode
    constructor(value: number, left?: TreeNode, right?: TreeNode){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

const  n4 = new TreeNode(4)
const  n5 = new TreeNode(5)
const  n6 = new TreeNode(6)
const  n7 = new TreeNode(7)
const root = new TreeNode(1, new TreeNode(2, n4, n5), new TreeNode(3, n6, n7))

/**
 * 二叉树广度遍历
 * @param root 二叉树根节点
 */
function bfs(root: TreeNode) {
    const queue = new Array<TreeNode>()
    queue.push(root)

    while(queue.length) {
        let size = queue.length
        console.log('当前层 size =', size);
        for (let i = 0; i < size; i++) {
            const node = queue.shift()!
            console.log('node =', node.value);
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
      
    }
}


/**
 * 前序遍历
 */
console.log(root);

function preTravel(root?: TreeNode) {
    if (root == null) return

    console.log('前序遍历 =', root.value);

    preTravel(root.left)

    preTravel(root.right)
    
}

// preTravel(root)

/**
 * 中序遍历
 */
function midTravel(root?: TreeNode) {
    if (root == null) return

    midTravel(root.left)

    console.log('中序遍历 =', root.value);


    midTravel(root.right)
    
}

// midTravel(root)

/**
 * 后续遍历
 */
function backTravel(root?: TreeNode) {
    if (root == null) return

    backTravel(root.left)

    backTravel(root.right)

    console.log('后续遍历 =', root.value);
    
}
backTravel(root)


// bfs(root)

/**
 * 从前序与中序遍历序列构造二叉树
 * 前序：[1,2,5,4,6,7,3,8,9]
 * 中序：[5,2,6,4,7,1,8,3,9]
 */
/**
 * root = [1]
 * leftTree = [5,2,6,4,7] 中序
 * rightTree = [8,3,9] 中序
 */



/**
 * 二叉树前序遍历
 */

// function preorderTraversal(root: TreeNode | null): number[] {
//     // 先用递归
//     const res = new Array()

//     dfs(root, res)
//     return res
// };

// function dfs(root: TreeNode | null, res: number[]) {
//     if (root === null) return

//     res.push(root.value)

//     console.log('res =',res);
    

//     if (root.left) {
//         dfs(root.left, res)
//     }
//     if (root.right) {
//         dfs(root.right, res)
//     }
// }

// const n3 = new TreeNode(3)
// const n2 = new TreeNode(2, n3, null)
// const root = new TreeNode(1, null, n2)

// console.log(root);


// console.log(preorderTraversal(root));
