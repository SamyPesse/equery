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
});
