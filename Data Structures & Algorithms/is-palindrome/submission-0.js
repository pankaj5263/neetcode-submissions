class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const regex = /[^a-zA-z0-9]/g;
        const str = s.replace(regex, "").toLowerCase()
        let left=0;
        let right=str.length-1;
        while(left<right){
            if(str[left]!==str[right]){
              return false;
            }
            right--;
            left++
        }
      return true
    }
}
