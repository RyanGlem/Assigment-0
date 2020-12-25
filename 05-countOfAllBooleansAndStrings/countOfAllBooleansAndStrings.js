function countOfAllBooleansAndStrings(arr) {
    var count = 0;

    for (i = 0; i <= arr.length - 1; i++) {
       
        if (arr[i] === Boolean(arr[i]) || typeof arr[i] == "string") {
            count++;
        }
    }

    return (count);
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;