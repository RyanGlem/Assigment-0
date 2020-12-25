function countOfAllBooleans(arr) {

    var count = 0;
   
    for (i = 0; i <= arr.length - 1; i++) {

        if (arr[i] === Boolean(arr[i])) {

            count++;
        }
    }
    return (count);
}


// Do not edit this line;
module.exports = countOfAllBooleans;