class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        const result =[];

        for(let i = 0;i <nums.length;i++){
            const count = map.get(nums[i]) +1 || 1;
            map.set(nums[i], count)
        }

        const arr = [...map.entries()]

        arr.sort((a, b)=>b[1]- a[1])

        return arr.slice(0,k).map(item => item[0]);
    }
}
