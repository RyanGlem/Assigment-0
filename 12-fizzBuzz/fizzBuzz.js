function fizzBuzz(start, end) {

    var range = (end - start);
    var arr = new Array(range);

    
    for (i = 0; i <= range; i++) {

        arr[i] = i + start;
    
        if (arr[i] % 3 == 0 && arr[i] % 5 == 0) {

            arr[i] = "FizzBuzz"
 
        } else if (arr[i] % 3 == 0) {

            arr[i] = "Fizz";
 
        } else if (arr[i] % 5 == 0) {

            arr[i] = "Buzz";
        }
    }


    console.log(arr);
    return (arr);

}

// Do not edit this line;
module.exports = fizzBuzz;