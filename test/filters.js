var Filter = require('../').Filter;

describe('Filter', function() {

    describe('Filter.Term', function() {
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

    describe('Filter.Bool', function() {
        it('should correctly output as JSON', function() {
            Filter.Bool()
                .must(Filter.Term('hello', 'world'))
                .toJSON()
                .should.deepEqual({
                    'bool': {
                        'must': [
                            {
                                'term': {
                                    'hello': 'world'
                                }
                            }
                        ]
                    }
                });
        });
    });

    describe('Filter.Exists', function() {
        it('should correctly output as JSON', function() {
            Filter.Exists('test')
                .toJSON()
                .should.deepEqual({
                    'exists': {
                        'field': 'test'
                    }
                });
        });
    });

});
