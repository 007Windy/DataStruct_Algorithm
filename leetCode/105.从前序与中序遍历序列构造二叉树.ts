/**
 * 105. 从前序与中序遍历序列构造二叉树
 * 给定两个整数数组 preorder 和 inorder ，
 * 其中 preorder 是二叉树的先序遍历， 
 * inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。
 */


//  Definition for a binary tree node.
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

const map = new Map()
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    for (let i = 0; i < inorder.length; i++) {
        if (!map.get(inorder[i])) {
            map.set(inorder[i], i)
        }
    }
    console.log('map =', map);
    
   build(preorder, 0, preorder.length, inorder, 0 ,inorder.length)
};

// 递归，辅助构造二叉树
function build(preorder: number[], preIdx: number, preEnd: number, inorder: number[], inIdx: number, inEnd: number) {
    if (preIdx > preEnd) {
        return null
    }
    // 获取根节点
    const node = preorder[preIdx]

    console.log('node =', node);
    

    const root = new TreeNode(node)

    console.log('root =', root);
    

    // 左子树的节点数
    const leftSize = map.get(node) - preIdx

    console.log('preIdx =', preIdx, 'leftSize =', leftSize);
    

    // 挂载左子树
    // root.left = build(preorder, preIdx + 1, leftSize, inorder, 0, inorder.length)



    console.log('leftSize =', leftSize);
    
    
    // 挂载右子树
    // root.right = build(preorder, leftSize + 1, preorder.length, inorder, 0, inorder.length)

    
}

const preorderNums = [3,9,20,15,7]
const inorderNums = [9,3,15,20,7]

buildTree(preorderNums, inorderNums)