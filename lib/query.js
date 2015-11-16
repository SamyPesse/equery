var _ = require('lodash');

function Query(opts) {
    if (!(this instanceof Query)) return new Query(opts);

    this._query = undefined;
    this._filter = undefined;
    this._sort = undefined;
}

// Set the query
Query.prototype.query = function(q) {
    this._query = q;
    return this;
};

// Define sorting
Query.prototype.sort = function(sort) {
    this._sort = sort || this._sort;
    return this;
};

// Define the filter
Query.prototype.filter = function(filter) {
    this._filter = filter || this._filter;
    return this;
};

// Define as a term query
// https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-term-query.html
Query.prototype.term = function(key, value, opts) {
    return this.query({
        term: _.extend(
            opts || {},
            _.object([[key, value]])
        )
    });
};

// Output the query as JSON
Query.prototype.toJSON = function() {
    var result = {};

    if (this._query) {
        result['query'] = _.cloneDeep(this._query);
    }

    if (this._filter) {
        result = {
            filtered: _.extend(
                result,
                {
                    filter: this._filter.toJSON()
                }
            )
        };
    }

    if (this._sort) {
        result['sort'] = this._sort;
    }

    return result;
};



module.exports = Query;
