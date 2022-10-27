var expect = chai.expect;

describe('MyFunctions', function () {
    describe("#averageArray", function () {
        it('should take an array of numbers and get the sum of numbers in an array.', function () {
            var sum = averageArray([5, 3, 5, 5]);
            expect(sum).to.equal(18);
        });
        
        it('should throw error if parameter is not a number', function () {
            expect(function () {
                averageArray('sjf');
            }).to.throw(Error);
        });
    });
});