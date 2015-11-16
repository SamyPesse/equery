var _ = require('lodash');
var BoolFilter = require('./filter-bool');

function Query(opts) {
    if (!(this instanceof Query)) return new Query(opts);

    this._query = undefined;
    this._filter = undefined;
    this._sort = undefined;
    this._opts = {};
}

// Set the query
Query.prototype.query = function(q) {
    this._query = q;
    return this;
};

// Set as a query string
Query.prototype.queryString = function(q, opts) {
    return this.query({
        'query_string' : _.defaults(opts || {}, {
            'default_field' : '_all',
            'query' : q
        })
    });
};

// Pagination
Query.prototype.size = function(size) {
    this._opts.size = size
    return this;
};
Query.prototype.from = function(from) {
    this._opts.from = from;
    return this;
};

Query.prototype.limit = Query.prototype.size;
Query.prototype.skip = Query.prototype.skip;

// Define sorting
Query.prototype.sort = function(sort) {
    this._sort = sort || this._sort;
    return this;
};

// Define/Extend the filter
Query.prototype.filter = function(filter) {
    if (this._filter) {
        if (!(this._filter instanceof BoolFilter)) {
            this._filter = BoolFilter().must(this._filter);
        }

        this._filter.must(filter);
    } else {
        this._filter = filter;
    }

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
        result.query = _.cloneDeep(this._query);
    }

    if (this._filter) {
        result.query = {
            filtered: _.extend(
                _.cloneDeep(result),
                {
                    filter: _.isPlainObject(this._filter)? this._filter : this._filter.toJSON()
                }
            )
        };
    }

    if (this._sort) {
        result['sort'] = this._sort;
    }

    return _.extend(result, this._opts);
};



module.exports = Query;
