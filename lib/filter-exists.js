var _ = require('lodash');
var util = require('util');
var BaseFilter = require('./filter-base');

function ExistsFilter(field) {
    if (!(this instanceof ExistsFilter)) return (new ExistsFilter(field));

    BaseFilter.call(this, 'exists');

    this.field(field);
}
util.inherits(ExistsFilter, BaseFilter);

// Set the field
ExistsFilter.prototype.field = function(field) {
    this._field = field;
    return this;
};

// Output the filter as JSON
ExistsFilter.prototype.toJSON = function() {
    return BaseFilter.prototype.toJSON.call(this, {
        field: this._field
    });
};

module.exports = ExistsFilter;
