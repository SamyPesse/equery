var Query = require('../');

describe('Query', function() {
    it('should return empty JSON', function() {
        var q = new Query();
        q.toJSON().should.deepEqual({});
    });
});
