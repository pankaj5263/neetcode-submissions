class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
characterReplacement(s, k) {

    let left = 0;
    let maxFreq = 0;
    let maxLength = 0;

    const count = {};

    for (let right = 0; right < s.length; right++) {

        // 1. Add current character
        const char = s[right];

        count[char] = (count[char] || 0) + 1;

        // 2. Find highest frequency
        maxFreq = Math.max(maxFreq, count[char]);

        // 3. Calculate window size
        const windowLength = right - left + 1;

        // 4. Calculate replacements needed
        const replacements = windowLength - maxFreq;

        // 5. If invalid, shrink window
        if (replacements > k) {
            count[s[left]]--;
            left++;
        }

        // 6. Update answer
        maxLength = Math.max(
            maxLength,
            right - left + 1
        );
    }

    return maxLength;
}
}
