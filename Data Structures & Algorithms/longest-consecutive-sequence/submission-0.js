class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let longest = 0;

        for(const x of set){
             if(!set.has(x-1)){
                let current = x;
                let length = 1
                while(set.has(current+1)){
                 current++;
                 length++;
                }
                longest = Math.max(longest, length);
             }
        }

        return longest;
    }
}
