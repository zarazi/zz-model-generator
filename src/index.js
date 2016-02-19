var uniqueRandomArray = require('unique-random-array')
var botNames = require('./bot-names.json');

module.exports = {
    bot:  {
        all: botNames,
        random: uniqueRandomArray(botNames)
    }
};