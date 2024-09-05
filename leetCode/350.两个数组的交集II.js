/**
 * 350. 两个数组的交集 II
 * 给你两个整数数组 nums1 和 nums2 ，
 * 请你以数组形式返回两数组的交集。返回结果中每个元素出现的次数，
 * 应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。
 * 可以不考虑输出结果的顺序。
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const res = []
    const map1 = getMap(nums1)
    const map2 = getMap(nums2)

    for (let i of map1.keys()) {
        
        if (map2.has(i)) {
            const min = Math.min(i, map2.get(i))
            if(min){
                for (let j = 0; j < min; j++) {
                    res.push(i)
                }
            }
            
        }
    }

    return res
};

function getMap(nums) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], 1)
        } else {
            let v = map.get(nums[i])
            map.set(nums[i], ++v)
            
        }
    }
    return map
}


// var intersect = function(nums1, nums2) {
//     const res = [];
//     const map1 = getMap(nums1);
//     const map2 = getMap(nums2);

//     for (let key in map1) {
//         if (map2[key]) {
//             // 计算该元素的交集次数（即最小值）
//             const minCount = Math.min(map1[key], map2[key]);
//             for (let i = 0; i < minCount; i++) {
//                 res.push(Number(key));
//             }
//         }
//     }

//     return res;
// };

// function getMap(nums) {
//     const map = {};
//     for (let i = 0; i < nums.length; i++) {
//         map[nums[i]] = (map[nums[i]] || 0) + 1;
//     }
//     return map;
// }


const nums1 = [1,2,2,1], nums2 = [2,2]

console.log(intersect(nums1, nums2));
