describe('triange', function() {
    it("will display equilateral for inputs given 2, 2, 2", function() {
        expect(triangle(2,2,2)).to.equal('equilateral');
    });
    it("will display an isoceles triangle if two sides are equal", function() {
        expect(triangle(2,2,3)).to.equal('isoceles');
    });
});
