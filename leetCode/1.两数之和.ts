/**
 * 两数之和
 * 给定一个整数数组 nums 和一个整数目标值 target，
 * 请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 * 你可以假设每种输入只会对应一个答案，并且你不能使用两次相同的元素。
 * 你可以按任意顺序返回答案。
 */

// 二分法实现
/* function twoSum(nums: number[], target: number): number[] {
    let res:number[] = []
    const arr = nums.map((value, index) => {
        return {
            index,
            value
        }
    })

    // 时间复杂度为log(N)
    arr.sort((i,j) => i.value - j.value)
    console.log(arr)

    let left = 0, right = arr.length - 1;

    while(left < right) {
        console.log('left =', left, 'right =', right);
        
        const sum = arr[left].value + arr[right].value
        if (sum === target) {
            res = [arr[left].index, arr[right].index]
            return res
        } else if (sum < target) {
            left++
        } else {
            right--
        }

    }
    return res
}; */


// 哈希表实现，将算法复杂度降为O(n)
function twoSum(nums: number[], target: number): number[] {
    let res:number[] = []
    // 创建哈希表
    const hashMap = new Map<number, number[]>()
    for (let i = 0; i < nums.length; i++) {
        const index = hashMap.get(nums[i]) ?? []
        index.push(i)
        hashMap.set(nums[i], index)
    }
    console.log(hashMap);

    for (let i = 0; i < nums.length; i++) {
        let another = target - nums[i]
        let indexArr = hashMap.get(another) ?? []

        const index = indexArr.find(index => index!== i)
        console.log('indexArr=',indexArr);

        if (index) {
            return [i, index]

        }
    }
    

    // for (let i of hashMap) {
    //     console.log('i=',i);
        
    //     let another = target - i[0]

    //     console.log('another =', another);

    //     let anotherIdxs = hashMap.get(another)
        
    //     if (anotherIdxs && anotherIdxs !== i[1]) {
    //         console.log('hashMap.get(another) =', hashMap.get(another));
            
    //         res.push(...anotherIdxs)
    //     }
        
    // }
    
    return res
};

// const nums:number[] = [2, 11, 7, 15, 1]
// const nums:number[] = [2, 3, 7, 3, 1]
// const nums:number[] = [3,  3]
const nums:number[] = [3,2,4]




// twoSum(nums, 8)

// console.log(twoSum(nums, 8));
// console.log(twoSum(nums, 6));
console.log(twoSum(nums, 6));

