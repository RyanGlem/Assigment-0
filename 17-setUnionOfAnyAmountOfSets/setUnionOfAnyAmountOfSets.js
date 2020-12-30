function setUnionOfAnyAmountOfSets(...args) {

    arguments = [...args];
    var set = new Set();

    for (i = 0; i <= args.length - 1; i++) {
        for (const k of arguments[i]) {
            set.add(k);
        }
    }

    return (set);
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;