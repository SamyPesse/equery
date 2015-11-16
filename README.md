# equery

[![npm version](https://badge.fury.io/js/equery.svg)](http://badge.fury.io/js/equery)
[![Build Status](https://travis-ci.org/SamyPesse/equery.png?branch=master)](https://travis-ci.org/SamyPesse/equery)


Query builder for elasticsearch (Node.js / Javascript)

### Installation

```
$ npm install equery
```

### Usage

```js
var Query = require('equery');

// Build a query
var q = new Query();

// Output the query as JSON
var result = q.toJSON();

// Term query
q.term('user', 'Kimchy');

// Queries are chainable
Query()
    .term('user', 'Kimchy')
    .sort('followers:desc')
    .toJSON();
```

### Filters

A filter can be set on the query using `query.filter(filer)`.

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

