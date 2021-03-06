var Query = require('../');

describe('Query', function() {
    it('should return empty JSON', function() {
        var q = new Query();
        q.toJSON().should.deepEqual({});
    });

    describe('query.term', function() {
        it('should accept field and value', function() {
            Query()
                .term('user', 'samy')
                .toJSON()
                .should.deepEqual({
                    'query': {
                        'term': {
                            'user': 'samy'
                        }
                    }
                });
        });
    });

    describe('query.filter', function() {
        it('should accept a filter', function() {
            Query()
                .filter(Query.Filter.Term('hello', 'world'))
                .toJSON()
                .should.deepEqual({
                    'query': {
                        'filtered': {
                            'filter': {
                                'term': {
                                    'hello': 'world'
                                }
                            }
                        }
                    }
                });
        });

        it('should extend existing filter', function() {
            Query()
                .filter(Query.Filter.Term('hello', 'world'))
                .filter(Query.Filter.Term('hello2', 'world'))
                .toJSON()
                .should.deepEqual({
                    'query': {
                        'filtered': {
                            'filter': {
                                'bool': {
                                    'must': [
                                        {
                                            'term': {
                                                'hello': 'world'
                                            }
                                        },
                                        {
                                            'term': {
                                                'hello2': 'world'
                                            }
                                        }
                                    ]
                                }
                             }
                         }
                    }
                });
        });
    });
});
