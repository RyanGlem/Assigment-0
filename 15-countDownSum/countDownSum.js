class MySolution {
    countDownSum(num) {

        var decrement = num - 1;
        if (decrement > 0) {

            num += this.countDownSum(decrement);
        }

        return (num);

    }

}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;