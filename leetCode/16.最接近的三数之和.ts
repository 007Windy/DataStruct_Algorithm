/**
 * 16. 最接近的三数之和
 * 给你一个长度为 n 的整数数组 nums 和 一个目标值 target。
 * 请你从 nums 中选出三个整数，使它们的和与 target 最接近。
 * 返回这三个数的和。
 * 假定每组输入只存在恰好一个解。
 */
// function threeSumClosest(nums: number[], target: number): number {
//    const len = nums.length
//    if (len === 3) { // 如果只有三个值，直接返回即可
//      return nums.reduce((total, cur) => total + cur, 0)
//    }
//     const sortNums = nums.sort((a, b) => a - b)
//     console.log('sortNums =', sortNums);

//     // 双指针，左边基准从 1 开始
//     let left = 1, right = nums.length - 1

//     // 初始最小值
//     let min = Infinity

//     // 返回结果
//     let resultVal

//     // 需要三个数
//     while(left < right) {
//         // 因为左右指针已经占用了两个长度，所以这里到 len - 3 结束
//         for (let i = 0; i < len - 3; i++) {
//             // 当前点
//             let curr = sortNums[i]
//             // 当前三个点的结果
//             let sum = curr + sortNums[left] + sortNums[right]
//             // 与目标值的差
//             let res = Math.abs(sum - target)

//             // console.log('sum =', sum);

//             // console.log('res =', res);
            
            
//             // 更新最小差值
//             if (res < min) {
//                 min = res

//                 resultVal = sum

//                 console.log('curr =', curr, 'left =', sortNums[left], 'right =', sortNums[right]);
                

//                 console.log('sum =', sum,'res =', res);

                
//                 console.log('------------------------');
                
                
//             }


//             if (sum - target < 0) {
                
//                 // console.log('当前值 =', curr, '偏小 left =', nums[left], '偏小 right =', nums[right], '偏小 res =', res);
                
//                 // 过小 -> 右移
//                 left++

//             } else if (sum - target > 0) {
//                 // 过大 -> 左移
//                 // console.log('当前值 =', curr, '偏大 left =', nums[left], '偏大 right =',nums[right],'偏大 res =', res);
                
//                 right--
//             } else {
//                 // 如果完全相等，那直接返回
//                 return sum
//             }

//         }    
        
//     }

    
//     return resultVal
// };

// const numsource = [-1,2,1,-4]

// // const numsSort = [-4,-1,1,2]

// console.log(threeSumClosest(numsource, 1));


// function getSum(nums: number[]) {
//     return nums.reduce((total, cur) => total + cur, 0)
// }

// console.log(getSum(numsource));


// TODO: 大数据样本没过 :
// [4,0,5,-5,3,3,0,-4,-5] 输出： -4， 预期结果：-2
function threeSumClosest(nums: number[], target: number): number {
    const len = nums.length
    if (len === 3) { // 如果只有三个值，直接返回即可
      return nums.reduce((total, cur) => total + cur, 0)
    }
    // 数组先升序排序
     const sortNums = nums.sort((a, b) => a - b)
     
     // 双指针，左边基准从 1 开始
     let left = 1, right = nums.length - 1
 
     // 初始最小值
     let min = Infinity
 
     // 返回结果
     let resultVal
 
     // 需要三个数
     while(left < right) {
         // 因为左右指针已经占用了两个长度，所以这里到 len - 3 结束
         for (let i = 0; i <= len - 3; i++) {
             // 当前点
             let curr = sortNums[i]
             // 当前三个点的结果
             let sum = curr + sortNums[left] + sortNums[right]
             // 与目标值的差
             let res = Math.abs(sum - target)
             
             // 更新最小差值
             if (res < min) {
                 min = res
 
                 resultVal = sum
             }
 
 
             if (sum - target < 0) {
                 // 过小 -> 右移
                 left++
 
             } else if (sum - target > 0) {
                 // 过大 -> 左移
                 right--
             } else {
                 // 如果完全相等，那直接返回
                 return sum
             }
 
         }    
         
     }
 
     return resultVal
 };


const nums = [4,0,5,-5,3,3,0,-4,-5], target = -2
const res = threeSumClosest(nums, target)
console.log('res =', res);
