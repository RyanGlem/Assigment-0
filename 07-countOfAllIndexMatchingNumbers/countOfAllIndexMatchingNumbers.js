function countOfAllIndexMatchingNumbers(nums) {
    var i = 0;
    var count = 0;

    while (i <= nums.length - 1) {

        if (nums[i] == i) {
            count++;
        }
        i++;
    }

    return (count);
    
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;