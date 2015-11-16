var _ = require('lodash');
var util = require('util');
var BaseFilter = require('./filter-base');

function BoolFilter() {
    if (!(this instanceof BoolFilter)) return (new BoolFilter());
    BaseFilter.call(this, 'bool');
}
util.inherits(BoolFilter, BaseFilter);


// Define the must field
BoolFilter.prototype.must = function(array) {
    if (!_.isArray(array)) array = [array];
    return this.set('must', array);
};


module.exports = BoolFilter;
