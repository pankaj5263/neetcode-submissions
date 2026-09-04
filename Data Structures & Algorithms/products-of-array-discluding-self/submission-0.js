class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
      let prefix = 1;
      let result =[];

      for(let i=0;i<nums.length;i++){
       result[i] = prefix;
       prefix = prefix * nums[i];
      }

      let suffix=1

    for(let i = nums.length-1;i>=0;i--){
       result[i] = result[i]*suffix;
       suffix = suffix * nums[i];
      }
    return result;
    }
}
