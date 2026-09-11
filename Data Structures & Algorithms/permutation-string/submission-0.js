class Solution {
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        const need = new Map();
        const window = new Map();

        // Count characters in s1
        for (const char of s1) {
            need.set(char, (need.get(char) || 0) + 1);
        }

        let left = 0;
        let right = 0;
        let matched = 0;

        while (right < s2.length) {
            const char = s2[right];

            // Add character to window
            window.set(char, (window.get(char) || 0) + 1);

            // If frequency is exactly what we need
            if (
                need.has(char) &&
                window.get(char) === need.get(char)
            ) {
                matched++;
            }

            // Window should not be bigger than s1
            while (right - left + 1 > s1.length) {
                const leftChar = s2[left];

                if (
                    need.has(leftChar) &&
                    window.get(leftChar) === need.get(leftChar)
                ) {
                    matched--;
                }

                window.set(leftChar, window.get(leftChar) - 1);

                left++;
            }

            // All characters matched
            if (matched === need.size) {
                return true;
            }

            right++;
        }

        return false;
    }
}