describe('movieTheater tests', () => {

    describe('ageRestrictions', () => {

        it('movieRating G test', () => {
            expect(movieTheater.ageRestrictions('G')).to.equal('All ages admitted to watch the movie');
        });

        it('movieRating PG test', () => {
            expect(movieTheater.ageRestrictions('PG')).to.equal('Parental guidance suggested! Some material may not be suitable for pre-teenagers');
        });

        it('movieRating R test', () => {
            expect(movieTheater.ageRestrictions('R')).to.equal('Restricted! Under 17 requires accompanying parent or adult guardian');
        });

        it('movieRating NC-17 test', () => {
            expect(movieTheater.ageRestrictions('NC-17')).to.equal('No one under 17 admitted to watch the movie');
        });

        it('movieRating wrong input test', () => {
            expect(movieTheater.ageRestrictions('A')).to.equal('There are no age restrictions for this movie');
            expect(movieTheater.ageRestrictions('')).to.equal('There are no age restrictions for this movie');
            expect(movieTheater.ageRestrictions('1')).to.equal('There are no age restrictions for this movie');

        });
    });

    describe('moneySpent tests', () => {
        it('Testing tickets input', () => {
            expect(() => movieTheater.moneySpent('1', ['popcorn'], ['water'])).to.throw();
        });

        it('Testing foods input', () => {
            expect(() => movieTheater.moneySpent(1, 1, ['water'])).to.throw();
        });

        it('Testing drinks input', () => {
            expect(() => movieTheater.moneySpent(1, ['popcorn'], 1)).to.throw();
        });

        it('Testing all for incorrect input', () => {
            expect(() => movieTheater.moneySpent('1', 1, 1)).to.throw();
        });

        it('Testing correct input with less than 50 bill', () => {
            expect(movieTheater.moneySpent(1, ['Popcorn'], ['Water'])).to.equal('The total cost for the purchase is 21.00');
        });

        it('Testing correct input with more than 50 bill', () => {
            expect(movieTheater.moneySpent(3, ['Popcorn'], ['Water'])).to.equal('The total cost for the purchase with applied discount is 40.80');
        });
    });

    describe('reservation tests', () => {
        it('Tests rowsArray incorrect input', () => {
            expect(() => movieTheater.reservation('1', 1)).to.throw();
        });

        it('Tests neededSeatsCount incorrect input', () => {
            expect(() => movieTheater.reservation(['1'], '1')).to.throw();
        });

        it('Tests neededSeatsCount incorrect input (2)', () => {
            expect(() => movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], '-1')).to.throw();
        });

        it('Tests neededSeatsCount incorrect input (3)', () => {
            expect(() => movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], '0')).to.throw();
        });

        it('Tests neededSeatsCount correct input', () => {
            expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }], 7)).to.equal(1)
        });

        it('Tests neededSeatsCount correct input(1)', () => {
            expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }], 6)).to.equal(1)
        });
    });
})