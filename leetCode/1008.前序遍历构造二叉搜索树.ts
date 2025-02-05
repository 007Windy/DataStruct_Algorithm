/**
 * 1008. 前序遍历构造二叉搜索树
 * 
 * 
 * 给定一个整数数组，它表示BST(即 二叉搜索树 )的 先序遍历 ，构造树并返回其根。
 
 * 保证 对于给定的测试用例，总是有可能找到具有给定需求的二叉搜索树。

 * 二叉搜索树 是一棵二叉树，其中每个节点， Node.left 的任何后代的值 严格小于 Node.val , Node.right 的任何后代的值 严格大于 Node.val。

 *二叉树的 前序遍历 首先显示节点的值，然后遍历Node.left，最后遍历Node.right。
 */



 class TreeNode {
    val: number
    left: TreeNode | null
     right: TreeNode | null
     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }
 }


function bstFromPreorder(preorder: number[]): TreeNode | null {
   // 思路：把当前的值与父节点比较，小的放左边，大的放右边，ok

    // 返回的结果
    const root = new TreeNode(preorder[0])

    const queue = new Array()
    // 先加入根节点
    queue.push(root.val)
    
    let index = 1
    let currentNode = root
    
    while(queue.length) {
        // 每一层去找
        let size = queue.length
        // 2的次方去找子节点
        let count = 2^size
        for (let s = 0; s < size; s++) {
            // 当前节点值
            const currVal = queue.shift()
            console.log('currVal =', currVal);
            
            // 挂载子节点
             if (currVal < currentNode.val) {
                const leftNode = new TreeNode(currVal)
                currentNode.left = leftNode
             } else if (currVal > currentNode.val) {
                const rightNode = new TreeNode(currVal) 
                currentNode.right = rightNode
             }
            
            for(index; index < preorder.length; index++) {
                if (preorder[index] < currVal) {
                queue.push(preorder[index])
                } else if(preorder[index] > currVal){
                    queue.push(preorder[index])
                }
            }
            index++
            console.log('queue =',queue);
            
        }
        
    }
    
    return root

};

const preorder = [8,5,1,7,10,12]

const tree = bstFromPreorder(preorder)

console.log(JSON.stringify(tree));
