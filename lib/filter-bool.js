var _ = require('lodash');
var util = require('util');
var BaseFilter = require('./filter-base');

// https://www.elastic.co/guide/en/elasticsearch/reference/1.4/query-dsl-bool-filter.html

function BoolFilter() {
    if (!(this instanceof BoolFilter)) return (new BoolFilter());
    BaseFilter.call(this, 'bool');

    this.conditions = {};

}
util.inherits(BoolFilter, BaseFilter);

BoolFilter.prototype.condition = function(type, array) {
    if (!_.isArray(array)) array = [array];

    this.conditions[type] = this.conditions[type] || [];
    this.conditions[type] = this.conditions[type].concat(array);

    return this;
};

BoolFilter.prototype.must = function(array) {
    return this.condition('must', array);
};

BoolFilter.prototype.mustNot = function(array) {
    return this.condition('must_not', array);
};

BoolFilter.prototype.should = function(array) {
    return this.condition('should', array);
};

// Output the filter as JSON
BoolFilter.prototype.toJSON = function() {
    var inner = _.mapValues(this.conditions, function(filters, type) {
        return _.map(filters, function(filter) {
            if (_.isPlainObject(filter)) return filter;
            return filter.toJSON();
        });
    });

    return BaseFilter.prototype.toJSON.call(this, inner);
};

module.exports = BoolFilter;
