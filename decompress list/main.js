/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    const newArray =[];
    for(let i = 0; i < nums.length; i += 2){
        console.log(nums[i])
        while (nums[i] > 0){
            newArray.push(nums[i+1])
            nums[i]--
        }
    }
    return newArray
};