var _ = require('lodash');

function Filter(type) {
    if (!(this instanceof Filter)) return new Filter(type);

    this.type = type;
}

// Output the filter as JSON
Filter.prototype.toJSON = function(inner) {
    return _.object([[this.type, inner || {}]]);
};

module.exports = Filter;
