var expect = chai.expect;

describe('War test', function() {
    describe ("test deck creation", function() {
        it('Creates a suffled deck', function() {
            let d = new Deck;
            d.shuffle();
            expect(d.cards.length).to.equal(52);
        });
    });
});