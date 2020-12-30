function pairSum(nums, target)  {
    console.log("Target: " + target);
    var hit = true;
    for (i = 0; i < nums.length; i++) {
        for (k = 0; k < nums.length; k++) {
            var answer = nums[i] + nums[k + 1];

            try {
                if (nums.length <= 1) {
                    throw 'Array is too small';
                } else if (answer === target) {

                    return true;

                } else {

                    hit = false;
                }
            } catch (e) {
                console.error(e.message);
            }
    
        }
    }

    return hit;
}

// Do not edit this line;
module.exports = pairSum;