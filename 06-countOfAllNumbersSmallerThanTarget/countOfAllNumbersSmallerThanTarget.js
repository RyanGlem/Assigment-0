function countOfAllNumbersSmallerThanTarget(nums, target) {
    var count = 0;

    for (i = 0; i <= nums.length - 1; i++) {

        if (nums [i] < target) {
            count++;
        }
    }

    return (count);
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;