/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    //loop through numbers
    //if num[i-1] or num[i+1] is null, do nothing
    //ifnum[i-1] and num[i+1] = num[i] , splice num[i], length counter --
    let lengthCounter = nums.length
    for(let i = 0; i < lengthCounter; i++){
        if(nums[i + 1] === nums[i] || nums[i-1] === nums[i]){
            nums.splice(i, 1);
            lengthCounter--;
        }
    }

    return nums;
};