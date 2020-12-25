function sumOfNumsWithinARange(nums, start, end) {

    var count = 0;

    for (i = 0; i <= nums.length - 1; i++) {

        if (nums[i] >= start && nums[i] <= end) {
            count++;
        }
    }
    return count;

}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;