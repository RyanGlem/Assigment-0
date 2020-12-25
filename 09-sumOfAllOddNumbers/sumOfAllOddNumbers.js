function sumOfAllOddNumbers(nums) {
    var count = 0;
    var i = 0;

    while (i <= nums.length - 1) {
        if ((nums[i] % 2) != 0) {
            count++;
        }
        i++;
    }
    return count;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;