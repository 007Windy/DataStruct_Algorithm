/*
100.相同的树

给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。

如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
 */

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/**
 * 我的思考总结：
 * 两颗树相同的条件：
 * 1.两颗树都为空 
 * 2.两棵树的结构和节点值相等（A树的左边有节点，B树的左边为空就不符合条件，B树的左边有节点，A树的左边为空也不符合条件。同理，右边也一样）
 * @param p 
 * @param q 
 * @returns 
 */

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (p === null && q === null) {
        return true
    }
    else if (p === null || q === null) {
        return false
    }
  
    let flag = true
  
    const pQueue = new Array(), qQueue = new Array()
      pQueue.push(p)
      qQueue.push(q)
  
    while(pQueue.length && qQueue.length) {
      const pNode = pQueue.shift()
      const qNode = qQueue.shift()
      if (pNode.val !== qNode.val) {
          flag = false
          return flag
      }
      // p树和q树，其中任意有一个左节点为空就不满足条件，返回false
      if ((pNode.left === null && qNode.left) || (pNode.left && qNode.left === null )) {
          flag = false
          return flag
      }
      // p树和q树，其中任意有一个右节点为空就不满足条件，返回false
      if ((pNode.right === null && qNode.right) || (pNode.right && qNode.right === null)) {
          flag = false
          return flag
      }
  
      // p树节点队列
  
      if (pNode.left) {
           pQueue.push( pNode.left)
      }
         
      if (pNode.right) {
          pQueue.push( pNode.right)
      }
          
      // q树节点队列
      if (qNode.left) {
          qQueue.push(qNode.left)
      }
      if (qNode.right) {
          qQueue.push(qNode.right)
  
      }    
      
    }
  
    return flag
     
  };