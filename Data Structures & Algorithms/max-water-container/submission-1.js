class Solution {
    maxArea(heights) {

        let mostWater = 0;
        let left = 0;
        let right = heights.length - 1;

        while (left < right) {

            const water =
                (right - left) *
                Math.min(heights[left], heights[right]);

            mostWater = Math.max(mostWater, water);

            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }

        return mostWater;
    }
}