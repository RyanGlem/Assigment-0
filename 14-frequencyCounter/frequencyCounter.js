function frequencyCounter(word) {

    var freq = {};

    for (i = 0; i <= word.length - 1; i++) {

        if (freq[word[i]]) {

            freq[word[i]] += 1;

        } else {

            freq[word[i]] = 1;

        }
    }

    return (freq);
}

// Do not edit this line;
module.exports = frequencyCounter;