class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for(let i=0;i<strs.length;i++){
              const st = strs[i].split('').sort().join('')
              if(map.has(st)){
                const d = map.get(st);
                map.set(st, [...d, strs[i]]);
              } else {
                map.set(st, [strs[i]]);
              }
        }
       return [...map.values()]
    }
}
