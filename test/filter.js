var Filter = require('../').Filter;

describe('Filter', function() {

    describe('Filter.term', function() {
        it('should correctly output as JSON', function() {
            Filter.Term('hello', 'world')
                .toJSON()
                .should.deepEqual({
                    term: {
                        hello: 'world'
                    }
                });
        });

        it('filter.key', function() {
            Filter.Term('hello', 'world')
                .key('hello2')
                .toJSON()
                .should.deepEqual({
                    term: {
                        hello2: 'world'
                    }
                });
        });

        it('filter.value', function() {
            Filter.Term('hello', 'world')
                .value('world 2')
                .toJSON()
                .should.deepEqual({
                    term: {
                        hello: 'world 2'
                    }
                });
        });
    });

    describe('Filter.bool', function() {

    });

});
