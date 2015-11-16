var _ = require('lodash');
var util = require('util');
var BaseFilter = require('./filter-base');

function TermFilter(key, value, opts) {
    if (!(this instanceof TermFilter)) return (new TermFilter(key, value, opts));

    BaseFilter.call(this, 'term');

    this._key = key;
    this._value = value;
    this._opts = opts;
}
util.inherits(TermFilter, BaseFilter);

// Define the key for the term
TermFilter.prototype.key = function(key) {
    this._key = key;
    return this;
};

// Define the value for the term
TermFilter.prototype.value = function(value) {
    this._value = value;
    return this;
};

// Define the value for the term
TermFilter.prototype.toJSON = function() {
    var inner = _.extend(
        this.opts || {},
        _.object([[this._key, this._value]])
    );

    return BaseFilter.prototype.toJSON.call(this, inner);
};

module.exports = TermFilter;
