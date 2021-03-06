# equery

[![npm version](https://badge.fury.io/js/equery.svg)](http://badge.fury.io/js/equery)
[![Build Status](https://travis-ci.org/SamyPesse/equery.png?branch=master)](https://travis-ci.org/SamyPesse/equery)


Query builder for elasticsearch (Node.js / Javascript)

## Installation

```
$ npm install equery
```

## Usage

### Building a query

```js
var Query = require('equery');

var query = new Query();
```

### query.toJSON

```js
var result = q.toJSON();
```

### query.sort

```js
query
    .sort('followers:desc')
    .toJSON();
```

### query.term

```js
query
    .term('field', 'value')
    .toJSON();
```

### PAgination

```js
query.limit(100);
query.skip(10);
```

### Chain

Queries are chainable:

```js
query
    .term('user', 'Kimchy')
    .sort('followers:desc')
    .limit(100)
    .skip(10)
    .toJSON();
```


### Filters

A filter can be set on the query using `query.filter(filer)`. Multiple calls to `query.filter` is equivalent to `filter1 AND filter2 AND ...`

##### Filter.Term

```js
query.filter(
    Query.Filter.Term('user', 'Kimchy')
)
```

##### Filter.Bool

```js
query.filter(
    Query.Filter.Bool()
    .must(Query.Filter.Term('user', 'Kimchy'))
    .mustNot(Query.Filter.Term('user', 'Kimchy'))
)
```

