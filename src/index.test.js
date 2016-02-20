import {expect} from 'chai';
import {bot} from './index';

describe('bot-names', function() {
    describe('all', function() {
        it('should be and array of strings', function() {
            expect(bot.all).to.satisfy(isArrayOfStrings);

            function isArrayOfStrings(array) {
                return array.every(function(item) {
                    return typeof item === 'string';
                });
            }
        });

        it("should contain 'i-bot'", function() {
            expect(bot.all).to.include('i-bot');
        });
    });

    describe('random', function() {
        it('should return random item from bot.all', function() {
            var randomItem = bot.random();
            expect(bot.all).to.include(randomItem);
        });
    });
});