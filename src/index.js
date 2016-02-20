import uniqueRandomArray from 'unique-random-array';
import botNames from './bot-names.json';

const bot = {
    all: botNames,
    random: uniqueRandomArray(botNames)
};

export { bot };