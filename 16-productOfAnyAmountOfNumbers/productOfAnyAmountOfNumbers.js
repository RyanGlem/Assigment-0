function productOfAnyAmountOfNumbers(...args) {

    var nums = [...args];
    var x = 1;

    for (i = 0; i <= nums.length - 1; i++) {

        x *= nums[i];
    }

    return (x);
  
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;