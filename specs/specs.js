describe('triange', function() {
    it("will display equilateral for inputs given 2, 2, 2", function() {
        expect(triangle(2,2,2)).to.equal('equilateral');
    });
    it("will display an isoceles triangle if two sides are equal", function() {
        expect(triangle(2,2,3)).to.equal('isoceles');
    });
    it("will display a scalene triangle if no sides are equal", function() {
        expect(triangle(2,3,4)).to.equal('scalene');
    });
    it("will return not a triangle if one side is greater than the sum of 2 sides", function() {
        expect(triangle(2,2,8)).to.equal('oops this is not a triangle');
    });
    it("will return not a triangle if one side is equal to the sum of 2 sides", function() {
    expect(triangle(3,3,6)).to.equal('oops this is not a triangle');
    });

});
