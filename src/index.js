import uniqueRandomArray from 'unique-random-array';
import botNames from './bot-names.json';

module.exports = {
    bot:  {
        all: botNames,
        random: uniqueRandomArray(botNames)
    }
};