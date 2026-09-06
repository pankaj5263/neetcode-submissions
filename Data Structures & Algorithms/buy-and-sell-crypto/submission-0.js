class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let minValue = Infinity;

        for(let i =0;i<prices.length;i++){
           if(minValue > prices[i]){
            minValue = prices[i];
           }

           let currentProfit = prices[i] - minValue;
           maxProfit = Math.max(currentProfit, maxProfit)
        
        }
        return maxProfit;
    }
}
